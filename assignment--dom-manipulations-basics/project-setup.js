
var qs = function(cssSelct){
  return document.querySelector(cssSelct);
}

var qsAll = function(cssSelct){
  return document.querySelectorAll(cssSelct);
}

function answerQuestionFor(qId,fn){
  qs(qId+' button').addEventListener('click',function(){
    fn();
  })
}


function generatePromptAndDemoHTML(obj, index){
  var htmlString  = "<div class='prompt'>"
      htmlString +=   "<h3>Task #"+(index+1)+"</h3>"
      htmlString +=   "<p>"+obj.task+"</p>"
      htmlString += "</div>"
      htmlString += "<div class='content-box teacher-demo'>"
      htmlString +=   "<h4>Demo</h4>"
      htmlString +=   "<img src='"+obj.link+"' alt='effect'>"
      htmlString += "</div>"

  return htmlString
}

var tasks = [
  {
    html_id: "pig-latin",
    task: "Make each element in the list read backwards.",
    link: "gifs/tasks.gif"
  },
  {
    html_id: "blow-up",
    task: "By manipulating the <code>&lt;div class='circle-red'&gt;</code> DOM element in JS, make the circle double height and width until it reaches 320px in width and height." +
          "When it reaches 320px, make the circle reduce back to its original size of 40px x 40px " +
           "<br/><br/><u>Hint:</u><br/> You can use reference the element's <code>.offsetHeight</code> and <code>.offsetWidth</code> properties to access its pixel-width and pixel-height numbers." ,
    link: "gifs/circle-red.gif"
  },
  {
    html_id: "reverse-squares",
    task: "Flip the squares to opposite order. " +
          "<br/><br/><strong>Hint:</strong> You will want to reverse the order of the <small><em> div square </em></small> elements and use the <a href='method.tps://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild'><code>.appendChild()</code></code></a> method.",
    link: "gifs/flip.gif"
  },
  {
    html_id: "inject-html",
   task: "<p><em><u>Demo:</u></em><br/> When the 'Push Me' <code>&lt;button&gt;</code> element is pushed, insert an <code>&lth2&gt;</code> element with some text inside <code>&lt;div class='answer-box'&gt;</code>\
         <br/><br/><em><u>Instructions:</u></em><br/> You will do all your work in the <code>main.js</code> file of this directory. </p>",
   link: "gifs/inject-html.gif"
  },
  {
     html_id: "double",
     task: "Each click of the button should double the value of the number below.<br/><br/> <strong>Hint:</strong> You may want to use Javascript's <code>parseInt()</code> utility to convert the DOM element's text content to an integer.",
     link: 'gifs/double.gif'
  },
  {
     html_id: "remove",
     task: "Remove each element of the list below that has the class 'inactive'." +
            "<br/><br/><u>Hint:</u><br/> You will need to use <code>querySelectorAll</code> to access some/all of the <code>&lt;li&gt;</code> elements the solve this problem.<br/>You may want to review the <a href='https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild'><code>.removeChild()</code></a> method for removing DOM elements.",
     link: 'gifs/remove.gif'
  },
  {
     html_id: "cycle-image",
     task: "<u>Adventure Mode</u><br/><br/>By increasing the number inside of the image's 'src' attribute, you can cycle through different city photos.<br/>To cycle forever, you may need to use the % operator!",
     link: 'gifs/cities.gif'
  }
]

function findEl(els, fn){
  var foundEl = {}
  for (var i = 0; i < els.length; i++){

    if (fn(els[i],i,els) === true){
      foundEl = {
        el: els[i],
        index: i
      }
      break;
    }
  }

  return foundEl
}

var exercises =  qsAll('.exercise-container')
tasks.forEach(function(t, i){
  var cssSelector="#"+t.html_id

  var el = findEl( exercises , function(el,i){
    return el.id === t.html_id
  })

  qs(cssSelector).innerHTML = generatePromptAndDemoHTML(t,el.index ) + qs(cssSelector).innerHTML
})
