 
$(()=>{
    
    if ($(document).width() <= 340)
    {
        $("#book-destination-0 .ui ").addClass("small")
     
    }     
    sendHeight();
}) 
 

 
function sendHeight() {
    
    const height = $("#book-destination-0").prop("scrollHeight") ;
    if (height) {
 
        window.parent.postMessage({ type: 'resize', height  }, '*');
        console.log(height)
    }
}

function resetHeight() {
    const element = $('#book-destination-0').innerHeight();
    if (element) {
        const height = $("#book-destination-0").innerHeight();
        window.parent.postMessage({ type: 'reset', height }, '*');
    }
}

window.addEventListener('message', function(event) {
    if (event.data.type === 'triggerSendHeight') {
      sendHeight();
 
    }
  });
 

// Call sendHeight on document ready
 
const bookDestinationCont = $("#book-destination-0")

    $('.ui.dropdown')
    .dropdown({
        onChange : function(value, text, $selectedItem) {

                        sendHeight() 
                }
    })
    ;
    $(".start-calendar-destination").calendar({
        type: 'date',
        endCalendar: $('.end-calendar-destination'),
        onVisible: function() {
            sendHeight() 
        }  ,
        onChange: function() {
            sendHeight() 
        } ,
        onShow: function() {
            sendHeight() 
        }
        ,
        onHide: function() {
            resetHeight() 
        } 
    });
    $('.end-calendar-destination').calendar({
        type: 'date',
        startCalendar: $('.start-calendar-destination'),
        onVisible: function() {
            sendHeight() 
        } ,
        onChange: function() {
            sendHeight() 
        } ,
        onShow: function() {
            sendHeight() 
        },
        onHide: function() {
            resetHeight() 
        } 
    });
    $(".select-flight-way").on("change" , function(){
        const dataID = $(".select-flight-way :selected").attr("data-id").trim()
        console.log(dataID)
        $(".book-destination:not('#" + dataID + "')").slideUp()
        $("#" + dataID).slideDown()
    })

async function getCountries() {
    const response = await fetch("/json/countries.json");
    if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
}
function safeToLowerCase(value) {
return typeof value === 'string' ? value.toLowerCase() : '';
}

// Helper function to get flag code
function getFlagCode(country) {
if (country.ISO && typeof country.ISO === 'string') return country.ISO.toLowerCase();
if (country.name && typeof country.name === 'string') return country.name.toLowerCase();
if (country.country && typeof country.country === 'string') return country.country.toLowerCase();
return '';
}

 
(async ()=>{
    
try { 
    const Countries =  await getCountries(); 

 
const formattedCountries = Countries.map((country, index) => {
return {
    title: country.city || '',
    description: (country.country || '') + (country.iataCode ?  ` ( ${country.iataCode}) ` : '').trim(),
    city: safeToLowerCase(country.city),
    country: safeToLowerCase(country.country),
    iataCode: safeToLowerCase(country.iataCode),
    name: safeToLowerCase(country.name),
    iso: safeToLowerCase(country.ISO),
    flag: getFlagCode(country)
};
});
console.log("here is", formattedCountries);
$('.ui.search').search({
        source: formattedCountries,
searchFields: ['title', 'description', 'city', 'country', 'iataCode', 'name', 'iso'],
fields: {
    title: 'title',
    description: 'description'
},
fullTextSearch: false,
searchOnFocus: true,
maxResults: 4,
templates: {
    standard: function(response) {
        console.log('Rendering result:', response);
        if (Array.isArray(response.results)) {
            return response.results.map(item => 
                '<div class="result">' +
                    '<div class="content">' +
                        '<div class="details-dest-1">' +
                            '<i class="ph-fill ph-airplane-tilt"></i>' +
                            (item.flag ? '<i class="' + item.flag + ' flag"></i>' : '') +
                        '</div>' +
                        '<div class="details details-dest-2">' +
                            '<div class="title">' + (item.title || '') + '</div>' +
                            '<div class="country-details">' + 
                                '<div class="description country-description">' + (item.description || '') + '</div>' +
                                '<div class="description country-code">' + (item.iataCode ? item.iataCode.toUpperCase() : '') + '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>'
            ).join('');
        } 
        return '';
    }
},
        onResultsAdd: function(results) {
            
            // console.log('Results added:', results);
        },
        onSearchQuery: function(query) {
            sendHeight() 
            // console.log('Search query:', query);
            $(".content").each((i ,el)=>{

                $(el).on("click" , function(){
        
                    // window.resetIframe(bookDestinationCont )

                    console.log($(this).find(".country-code").text().trim())

                    
                })
            })
        },
        onResults: function(results) {
            // console.log('Results:', results);
    
        },
        onResultsClose : function(){
           resetHeight()
        }
    }); 
}
catch(error){
    console.log("ERROR FETCHING COUNTRIES :" , error)
}
})();