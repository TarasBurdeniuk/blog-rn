import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('post.db');

class DB {
    static init() {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    // eslint-disable-next-line max-len
                    'CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY NOT  NULL, text NOT NULL, img TEXT, date TEXT, booked INT)',
                    [],
                    resolve,
                    (_, err) => reject(err),
                );
            });
        });
    }

    static getPost() {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    'SELECT * FROM posts',
                    [],
                    // eslint-disable-next-line no-underscore-dangle
                    (_, result) => resolve(result.rows._array),
                    error => reject(error),
                );
            });
        });
    }

    static createPost({ text, date, img }) {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    `INSERT INTO posts (text, date, booked, img) VALUES (?, ?, ?, ?)`,
                    [text, date, 0, img],
                    (_, result) => resolve(result.insertId),
                    (_, error) => reject(error),
                );
            });
        });
    }

    static updatePost(post) {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    // eslint-disable-next-line max-len
                    'UPDATE posts SET booked = ? WHERE id = ?',
                    [post.booked ? 0 : 1, post.id],
                    resolve,
                    (_, err) => reject(err),
                );
            });
        });
    }

    static removePost(id) {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    // eslint-disable-next-line max-len
                    'DELETE FROM posts WHERE id = ?',
                    [id],
                    resolve,
                    (_, err) => reject(err),
                );
            });
        });
    }
}

export default DB;
