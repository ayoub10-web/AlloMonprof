document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
  
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'timeGridWeek',
      allDaySlot: false,
      locale: 'fr',
      firstDay:1,
      slotMinTime: '07:00',
      slotMaxTime: '18:00',
      slotDuration: "00:60:00",
      height:'auto',
      dayHeaderFormat: {
        weekday: 'short',
        day: 'numeric'
    },
    headerToolbar: {
        start: '', // will normally be on the left. if RTL, will be on the right
        center: '',
        end: 'prev next'
    },
    dayHeaderContent: function(e){
        let parts = e.text.split(". ");
        if(parts[1] < 10)
            parts[1] = "0"+parts[1];

        parts[1] = '<span>'+parts[1]+'</span>';

        return { html: '<div class="day">'+parts.join("")+'</div>' };
    },
    slotLabelContent: function(e){
        let h = e.date.getHours();
        if(h < 10)
            h = "0"+h;

        h = h+":00";

        return { html: '<div class="time">'+h+'</div>' };
    },
    dayRender: function (date, cell) {

        var today = new Date();

    
        if (date.getDate() === today.getDate()) {
            cell.css("background-color", "red");
        }
    
    
    }  ,
    events: [
        {
          title: 'Fitness', // a property!
          start: '2021-08-18 10:00:00', // a property!
          end: '2021-08-18 11:00:00' // a property! ** see important note below about 'end' **
        },
        {
            title: 'Math', // a property!
            start: '2021-08-14 14:00:00', // a property!
            end: '2021-08-14 16:00:00' // a property! ** see important note below about 'end' **
          }
    ]

    });
  
    calendar.render();
  });

  //

  $('#datepicker').datepicker({
    calendarWeeks: false, 
    todayHighlight: true,
    language:'fr',
    dayNamesShort : "daysShort",

    dateFormat: "yy-mm-ddd",
    templates: {
        leftArrow: '<span class="fc-icon fc-icon-chevron-left"></span>',
        rightArrow: '<span class="fc-icon fc-icon-chevron-right"></span>'
    },
    beforeShowDay: function(date){
        console.log();
        return {
            content: '<div><div>'+date.getDate()+'</div></div>',
        };
    }
});

