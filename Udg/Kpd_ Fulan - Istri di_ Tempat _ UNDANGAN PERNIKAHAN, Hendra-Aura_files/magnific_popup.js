
popup()
function popup(){
    $('.popup-youtube').magnificPopup({
        disableOn: false,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 20,
        preloader: false,

        fixedContentPos: false,
    });
}
const toggleVideo = () => {       
    const dataPlay = btn.getAttribute('data-play');
    myAudio.pause();
        $("#ytVid").css("overflow","hidden");
        if(dataPlay === 'true') {
                setTimeout(function() {
                for (let i = 0; i < 100; i++) {
                    const iniStart = i + dataPlay;
                    $(".mfp-ready").click(function(){
                        $("#ytVid").css("overflow-y","scroll");
                        // console.log("number" +i);
                        if(iniStart === i + 'true') {
                            btn.setAttribute('data-play', 'true');
                            myAudio.play();
                            btnIcon.classList.remove("fa-play");
                            btnIcon.classList.add("fa-pause");
                        }
                        i++;
                    }); break;   
                }
            }, 100); 
        }else {
                // console.log("No input here after click true data play " + dataPlay);
                    setTimeout(function() {
                        for (let j = 0; j < 100; j++) {
                        const iniStart = j + dataPlay;
                        $(".mfp-ready").click(function(){
                            // console.log("just input here ");
                            $("#ytVid").css("overflow-y","scroll");
                            if(iniStart === j + 'true') {
                                btn.setAttribute('data-play', 'false');
                                myAudio.pause();
                                btnIcon.classList.remove("fa-pause");
                                btnIcon.classList.add("fa-play");
                            }
                        j++;
                    }); break;   
                }
            }, 100); 
        }
};
