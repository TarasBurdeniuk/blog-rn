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
}

export default DB;
