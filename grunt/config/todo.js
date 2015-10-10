/**
 * @file todo.js
 * explores todos in app and outputs in report file
 * @author Albert Cyberhulk
 * @date 10/10/15
 */

module.exports = {
    options: {
      marks: [
        {
          pattern: 'BURP',
          color: 'pink'
        },
        {
          name: 'XXX',
          pattern: /XXX/,
          color: 'yellow'
        }
      ],
      file: 'todo.md',
      githubBoxes: true,
      colophon: true,
      usePackage: true
    },
    src: [
      'test/*',
      'app/*',
      'grunt/*',
      '!app/bower/components/'
    ]
};
