document.querySelector('#push').onClick = function
 () {
     if (document.querySelector('#newtask input').
     value.length == 0) {

          alert("Please Enter a Task")

     }else {
          document.querySelector('#tasks').innerHTMl +=
          `
          <div class="task">
            <span id="taskname">
               ${document.querySelector('#newtask input').value}
            </span>
            <button class="delete">
                  <i class="far fa-trash-alt></i> 
            <button/>
            </div>
          `;

          var current_task = document.querySelector(".delete");
          for (var i=0; i<current_tasks.length; i++) {
               current_tasks[i].onClick = function () {
                    this.parentNode.remove()
               }
          }

          var tasks = document.querySelectorAll(".tasks")
          for (var i=0; i<tasks.length;i++) {
               tasks[i].onClick = function () {
                    this.classList.toggle('completed')
               }
          }
     }

 }