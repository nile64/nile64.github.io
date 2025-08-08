$(document).ready(function(){
    // Get Profile Stats
    $('#statsErrorText').hide();
    $('#profileStats').hide();
    fetch('https://gdbrowser.com/api/profile/nile64')
        .then(response => response.json())
        .then(data => {
            console.log('User Profile Data:', data);
            $('#statsLoadingText').hide();
            $('#psStars').text(data.stars);
            $('#psMoons').text(data.moons);
            $('#psSCoins').text(data.coins);
            $('#psUCoins').text(data.userCoins);
            $('#psDemons').text(data.demons);
            $('#psCP').text(data.cp);
            $('#profileStats').show();
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            $('#statsErrorText').show();
            $('#statsLoadingText').hide();
    });

    // Get extremes.json and use it
    $.getJSON('/data/extremes.json', function (data) {
        console.log(data)
        $('#dRatedExtremes').text(data.ratedExtremes);
        $('#dUnratedExtremes').text(data.unratedExtremes);
        $('#dTotalExtremes').text(data.totalExtremes);
        var lvl = '';
        
        $.each(data.extremes, function(i, value) {
            lvl += '<tr class="demonBG">';
            lvl += '<td>' + (i + 1) + '</td>';
            var rate = '';
            if(value.rating == "unrated"){
                rate = '<img src="/assets/UnratedExtremeB.png" class="demonDiffFace">'
            }
            else if(value.rating == "rate"){
                rate = '<img src="/assets/RatedExtremeB.png" class="demonDiffFace">'
            }
            else if(value.rating == "feature"){
                rate = '<img src="/assets/FeaturedExtreme.png" class="demonDiffFace">'
            }
            else if(value.rating == "epic"){
                rate = '<img src="/assets/EpicExtreme.png" class="demonDiffFace">'
            }
            else if(value.rating == "legendary"){
                rate = '<img src="/assets/LegendaryExtreme.png" class="demonDiffFace">'
            }
            else if(value.rating == "mythic"){
                rate = '<img src="/assets/MythicExtreme.png" class="demonDiffFace">'
            }

            if(value.hardest)
            {
                lvl += '<td style="font-size: 30px; font-weight: 700;">' + rate + '<a class="demonLinkHardest" href="' + value.video + '">' + value.name + '</a></td>';
            }
            else 
            {
                lvl += '<td style="font-size: 28px; font-weight: 600;">' + rate + '<a class="demonLink" href="' + value.video + '">' + value.name + '</a></td>';
            }
            lvl += '<td><a class="idLink" href="https://gdbrowser.com/' + value.id + '">' + value.id + '</td>';
            lvl += '<td>' + value.attempts + '</td>';
            lvl += '<td>' + value.date + '</td>';
            lvl += '</tr>';
            $('#demonTable').append(lvl);
            lvl = '';
        });
    });

});
