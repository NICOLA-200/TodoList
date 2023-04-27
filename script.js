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
     }
 }