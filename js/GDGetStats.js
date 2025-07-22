$(document).ready(function(){
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
});