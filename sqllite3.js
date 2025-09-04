//  npm install sqllite3 

const sqlite3=  require('sqlite3').verbose();
const db = new sqlite3.Database('mydb.sqlite');

db.run('CREATE TABLE IF NOT EXISTS users (name TEXT, email TEXT, password TEXT)');
const insert=db.prepare('INSERT INTO users(name,email,password) VALUES (?,?,?)');
db.run('ALTER TABLE users ADD COLUMN email TEXT', (err) => {
});
insert.run('John Doe','RbKJF@example.com','password');
insert.run('Jane Doe','q4bW2@example.com','rolex');
insert.run('Leo','H6Z8Y@example.com','parthiban');
insert.finalize();

db.all('SELECT * FROM users', (err, rows) => {
        console.log(rows);
    });
