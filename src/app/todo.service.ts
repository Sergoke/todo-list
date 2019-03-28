import {Injectable} from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

interface TodoItem {
  title: string;
  done: boolean;
}

interface TodoItemWithMeta extends TodoItem {
  id: string;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todoColl: AngularFirestoreCollection<TodoItem> = this.afs.collection('todos');
  todos: TodoItemWithMeta[];

  constructor(private afs: AngularFirestore) {
    this.todoColl.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          return {id: a.payload.doc.id, ...data};
        });
      })
    ).subscribe((data: TodoItemWithMeta[]) => {
      this.todos = data;
    });
  }

  add(title: string): Promise<any> {
    if (!title.length) {
      return Promise.reject('title length must be at least one symbol');
    }
    return this.todoColl.add({title, done: false});
  }

  delete(id: string) {
    this.todoColl.doc(id).delete().then(res => console.log(`successfully deleted item with id: "${id}"`));
  }

  update(id: string, title: string) {
    if (title === undefined) return;
    this.todoColl.doc(id).update({title}).then(res => console.log(`successfully updated item with id: "${id}"`));
  }

  toggleDone(id: string, prevValue: boolean) {
    this.todoColl.doc(id).update({done: !prevValue}).then(res => console.log(`successfully toggled done of item with id: "${id}"`));
  }
}
