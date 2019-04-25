var quiz = [
    {
        image:"https://cdn.pixabay.com/photo/2014/06/03/19/38/road-sign-361514_960_720.png",
        question:"Question 1 lalalalalllallalalalalallalalalala",
        answers:[
            "Answer 1 lalalalalalallalal",
            "Answer 2 lalalalalalallalal",
            "Answer 3 lalalalalalallalal",
            "Answer 4 lalalalalalallalal"
        ],
    },
    {
        image:"https://png.pngtree.com/svg/20170227/5752c5f99c.png",
        question:"Question 2 lalalalalllallalalalalallalalalala",
        answers:[
            "Answer 5 lalalalalalallalal",
            "Answer 6 lalalalalalallalal",
            "Answer 7 lalalalalalallalal",
            "Answer 8 lalalalalalallalal"
        ],
    },
];
(function (){
    var qcount=0;
    function setquestion(qcount){
        if(qcount>=quiz.length) return;
        $(".qimage img").attr("src", quiz[qcount].image);
        $(".question").html(quiz[qcount].question);
        $("#cquest").html(qcount+1);
        $("#maxquest").html(quiz.length);
        for(var i=0; i<quiz[qcount].answers.length;i++){
            $($(".answer .optiontext")[i]).html(quiz[qcount].answers[i]);
        }
        
    }
    function init(){
        $(document).ready(function (){
            $(".navbar-toggler").on("click",function(){
                $(".overlap").toggleClass("active");
                $(this).find("i").toggleClass("fa-times fa-bars");
            });
            setquestion(qcount);
            $("#bprev").on("click", function(){
                if(qcount>0){
                    qcount=qcount-1;
                    setquestion(qcount);
                }
            });
            $("#bnext").on("click", function(){
                if(qcount<quiz.length-1){
                    qcount=qcount+1;
                    setquestion(qcount);
                }
            });
        });
    }
    init();
})();

