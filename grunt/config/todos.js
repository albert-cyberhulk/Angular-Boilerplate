/**
 * @file todo.js
 * explores todos in app and outputs in report file
 * @author Albert Cyberhulk
 * @date 10/10/15
 */

module.exports = {
  options: {
    reporter: {
      header: function () {
        return '-- Begin Task List --\n';
      },
      fileTasks: function (file, tasks, options) {
        var result = '';
        result += 'For ' + file + '\n';
        tasks.forEach(function (task) {
          result += '[' + task.lineNumber + ' - ' + task.priority + '] ' + task.line + '\n';
        });
        result += '\n';
        return result;
      },
      footer: function () {
        return '-- End Task List--\n';
      }
    }
  },
  src : ['Gruntfile.js', 'app/scripts/app.js', 'app/script/*.js', 'test/**/*.js']
};
