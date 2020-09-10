handleEvent: function handleEvent(
    /**Event*/
    evt) {
    switch (evt.type) {
        case 'drop':
        case 'dragend':
            this._onDrop(evt);

            break;

        case 'dragenter':
        case 'dragover':
            if (dragEl) {
                this._onDragOver(evt);

                _globalDragOver(evt);
            }

            break;

        case 'selectstart':
            evt.preventDefault();
            break;
    }
}


{/* </head >
    <body>

        <p>Drag the p element back and forth between the two rectangles:</p>

        <div class="droptarget" ondrop="drop(event)" ondragover="allowDrop(event)">
            <p ondragstart="dragStart(event)" ondrag="dragging(event)" draggable="true" id="dragtarget">Drag me!</p>
        </div>

        <div class="droptarget" ondrop="drop(event)" ondragover="allowDrop(event)"></div>

        <p style="clear:both;"><strong>Note:</strong> drag events are not supported in Internet Explorer 8 and earlier versions or Safari 5.1 and earlier versions.</p>

        <p id="demo"></p>

        <script>
            function dragStart(event) {
                event.dataTransfer.setData("Text", event.target.id);
}

function dragging(event) {
                document.getElementById("demo").innerHTML = "The p element is being dragged";
}

function allowDrop(event) {
                event.preventDefault();
}

function drop(event) {
                event.preventDefault();
  var data = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data));
  document.getElementById("demo").innerHTML = "The p element was dropped";
} */}