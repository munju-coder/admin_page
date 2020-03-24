google.charts.load('current', {'packages':['annotationchart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('date', 'Date');
  data.addColumn('number', 'Kepler-22b mission');
  data.addColumn('string', 'Kepler title');
  data.addColumn('string', 'Kepler text');
  data.addColumn('number', 'Gliese 163 mission');
  data.addColumn('string', 'Gliese title');
  data.addColumn('string', 'Gliese text');
  data.addRows([
    [new Date(2314, 2, 15), 12400, undefined, undefined,
                            10645, undefined, undefined],
    [new Date(2314, 2, 16), 24045, 'Lalibertines', 'First encounter',
                            12374, undefined, undefined],
    [new Date(2314, 2, 17), 35022, 'Lalibertines', 'They are very tall',
                            15766, 'Gallantors', 'First Encounter'],
    [new Date(2314, 2, 18), 12284, 'Lalibertines', 'Attack on our crew!',
                            34334, 'Gallantors', 'Statement of shared principles'],
    [new Date(2314, 2, 19), 8476, 'Lalibertines', 'Heavy casualties',
                            66467, 'Gallantors', 'Mysteries revealed'],
    [new Date(2314, 2, 20), 0, 'Lalibertines', 'All crew lost',
                            79463, 'Gallantors', 'Omniscience achieved']
  ]);

  var chart = new google.visualization.AnnotationChart(document.getElementById('v_chart'));

  var options = {
    displayAnnotations: true
  };

  chart.draw(data, options);

  google.charts.load("current", {packages:["corechart"]});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Work',     11],
      ['Eat',      2],
      ['Commute',  2],
      ['Watch TV', 2],
      ['Sleep',    7]
    ]);

    var options = {
      title: '방문자 광고 매체 현황',
      is3D: true,
    };

    var chart = new google.visualization.PieChart(document.getElementById('db_circle'));
    chart.draw(data, options);
    
  }

}

// sticky note
window.onload = init; 

function init() { 
    var button = document.getElementById("add_button"); 
    button.onclick = createSticky; 
     
    var stickiesArray = getStickiesArray(); 
    for (var i=0; i<stickiesArray.length; i++) { 
        var key = stickiesArray[i]; 
        var value = JSON.parse(localStorage[key]); 
        addStickyToDOM(key, value); 
    } 
} 

function getStickiesArray() { 
    var stickiesArray = localStorage.getItem("stickiesArray"); 
    if (!stickiesArray) { 
        stickiesArray = []; 
        localStorage.setItem("stickiesArray", JSON.stringify(stickiesArray)); 
    } else { 
        stickiesArray = JSON.parse(stickiesArray); 
    } 
     
    return stickiesArray; 
} 

function createSticky() { 
    var stickiesArray = getStickiesArray(); 
    var value = document.getElementById("note_text").value; 
    var ColorSelectObj = document.getElementById("note_color"); 
    var index = ColorSelectObj.selectedIndex; 
    var color = ColorSelectObj[index].value; 
     
    // json으로 value와 color가 유지되는 스티키 노트를 생성 
    var currentDate = new Date(); 
    var key = "sticky_"+currentDate.getTime(); 
    var stickyObj = { 
            "value" : value, 
            "color" : color 
    }; 
    localStorage.setItem(key, JSON.stringify(stickyObj)); 
     
    // 새 스티키 노트를 배열에 추가하고 localStorage에 저장된 notes 배열을 업데이트함 
    stickiesArray.push(key); 
    localStorage.setItem("stickiesArray", JSON.stringify(stickiesArray)); 
     
    addStickyToDOM(key, stickyObj); 
} 

function deleteSticky(e) { 
    var key = e.target.id; 
    if (e.target.tagName.toLowerCase() == "span") { 
        key = e.target.parentNode.id; 
    } 
     
    var stickiesArray = getStickiesArray(); 
    if (stickiesArray) { 
        for (var i=0; i<stickiesArray.length; i++) { 
            if (key == stickiesArray[i]) { 
                stickiesArray.splice(i, 1); 
            } 
        } 
         
        localStorage.removeItem(key); 
        localStorage.setItem("stickiesArray", JSON.stringify(stickiesArray)); 
        removeStickyFromDOM(key); 
    } 
} 

function addStickyToDOM(key, stickyObj) { 
    var stickies = document.getElementById("stickies"); 
    var sticky = document.createElement("li"); 
     
    // 스티키 배열에 저장된 아이디로 찾을 수 있게 id속성에 key값을 지정 
    sticky.setAttribute("id", key); 
     
    // stickyObj의 color를 이용해서 CSS 배경색 스타일을 지정 
    sticky.style.backgroundColor = stickyObj.color; 
     
    var span = document.createElement("span"); 
    span.setAttribute("class", "sticky"); 
     
    // stickyObj의 value를 이용해서 스티키 노트의 내용을 할당 
    span.innerHTML = stickyObj.value; 
     
    // 모든 것을 DOM에 추가 
    sticky.appendChild(span); 
    stickies.appendChild(sticky); 
     
    // 스티키 노트를 클릭하면 삭제되도록 이벤트 리스너를 붙임 
    sticky.onclick = deleteSticky; 
} 

function removeStickyFromDOM(key) { 
    var sticky = document.getElementById(key); 
    sticky.parentNode.removeChild(sticky); 
} 

function clearStickyNotes() { 
    localStorage.clear(); 
    var stickyList = document.getElementById("stickies"); 
    var stickies = stickyList.childNodes; 
    for (var i=stickies.length-1; i>=0; i--) { 
        stickyList.removeChild(stickies[i]); 
    } 
     
    // 스티키 배열을 초기화 
    var stickiesArray = getStickiesArray(); 
}


