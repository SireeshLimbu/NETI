if (Meteor.isClient) {
    var a, arr=[],so= 1, b, c, d=[], e=[],  re=[], question=[],obj=[], f,  target= 0, ques=[], g, h=[],r=[], i, choice=[], sum= 0, name=[], ar=[], j, k=[], l=[], m, n, o=[], p=[], q, s=[], t,exe,O_no,type;
    Router.map(function()
    {
    this.route('loginButtons', {path: '/'})
    this.route('survey',{
        path: "/survey",
        template: "survey"
    });
    this.route('surveyresult',{
        path: "/sr",
        template: "surveyresult"
    });
    this.route('survey_show',{
            path: "/s_show",
            template: "survey_show"}
//        path: "/survey_show/:id",
//        template: "survey_show",
//        data: function(){
//            id: this.params.id
//        }
    );
        this.route('quiz_form',{
            path:"/Quiz",
            template:"quiz_form"
        });
        this.route('Output',{
            path:"/Output",
            template:"Output"
//            data: function(){
//                id:this.params.id;
//            }
        })

    })
    Template.survey.events({
        'click .element': function (event, template) {
            a = $('input:text[class=roundtext]').val();
            b = $('input:text[class=timetext]').val();
            i = $('input:text[class=name]').val();
            s = document.getElementsByName('option1');
            t = s[0].options[s[0].selectedIndex].value;
            arr = document.getElementsByName('option');
            c = arr[0].options[arr[0].selectedIndex].value;
            f = $('input:text[class=key]').val();
            g = $('input:text[class=value]').val();
            j = arr[0].options[arr[0].selectedIndex].id;
            m = document.getElementsByName('option2');
            n = m[0].options[m[0].selectedIndex].value;
            q = m[0].options[m[0].selectedIndex].id;
            name[0]=i;
            d[0] = f;
            e[0] = g;
            k[0] = n;
            p[0] = q;
            for (x = 0; x < sum; x++)
            {
                name[x+1] = $('input:text[id= '+ x + ']').val()
                d[x + 1] = $('input:text[id= ' + x + x + ']').val();
                e[x + 1] = $('input:text[id=' + x + x + x + ']').val();
                l = document.getElementsByName(x);
                o[x] = l[0].options[l[0].selectedIndex].value;
                k[x + 1] = o[x];
                p[x + 1] = l[0].options[l[0].selectedIndex].id;
            }

        for (x = 0; x < sum + 1; x++) {
        h[x] = d[x] + ' : ' + e[x];
        r[x] = 'Option Chosen : ' + k[x];
        }
           // console.log(k);
    userData.insert
    (
        {
            Constant_Variables:
            {
                Turns: a,
                Format_Turns: c,
                RoundTime: b,
                Format_RT:t
            },
            User_Defined:
            {
                Id : p,
                Name : name,
                Variables :
                {
                    Dimension : h,
                    Option : r
                }
            }
        }
    )
    for(var z =1; z<sum+1;z++){
        userData.insert({index:z});
    }
     $('.form').remove();
     Router.go('surveyresult');
        },
        'click .butt': function (event, template)
        {
            my_div.innerHTML = my_div.innerHTML + "<input type='text' value='Enter name' class='name' id="+sum+">  <input type='text' value='Enter your key' class='key' name='mytext' id=" + sum + sum +" > <input type='text' value='Enter value of key'  class='value' name='mytext1' id=" + sum + sum + sum+ "> " +
                "<select name=" + sum + "> <option value ='choice' selected> Choose An Option :-</option> <option value='Radio' class='rad' id=" + sum + sum + ">1. Radio</option> <option value='Text' class='rad' >2. Text</option> <option value='Paragraph' class='rad' id=" + sum + sum + sum + sum + ">3. Paragraph</option> <option value='Checkbox'class ='rad' id=" + sum + sum + sum + sum + sum + ">4. Checkbox</option></select> <br>"
            sum = sum + 1;
//            var input = document.getElementsByName('mytext');
//            var id = input[0].getAttribute('id');
        },
        'click .quiz': function (event, template){
        Router.go('quiz_form');
        }
    })
    Template.surveyresult.events({
        'click .show': function(event, template){
           Router.go('survey_show');
        }
    })
    Template.surveyresult.res = function(){
     return userData.find().fetch();
        }
    Template.survey_show.select = function()
        {
            $('.form').remove();
            if(c=='Text') {
                modal = UI.renderWithData(Template.te);
                UI.insert(modal, document.getElementsByClassName("wrapper")[0])
            }
            if(c=='Paragraph') {
                modal = UI.renderWithData(Template.parag);
                UI.insert(modal, document.getElementsByClassName("wrapper")[0])
            }
            if(c=='Radio') {
                modal = UI.renderWithData(Template.radi);
                UI.insert(modal, document.getElementsByClassName("wrapper")[0])
            }
            if(c=='Checkbox') {
                modal = UI.renderWithData(Template.che);
                UI.insert(modal, document.getElementsByClassName("wrapper")[0])
            }
            if(n=='Text') {
                modal = UI.renderWithData(Template.te);
                UI.insert(modal, document.getElementsByClassName("wrapper")[0])
            }
            if(n=='Paragraph') {
                modal = UI.renderWithData(Template.parag);
                UI.insert(modal, document.getElementsByClassName("wrapper")[0])
            }
            if(n=='Radio') {
                modal = UI.renderWithData(Template.radi);
                UI.insert(modal, document.getElementsByClassName("wrapper")[0])
            }
            if(n=='Checkbox') {
                modal = UI.renderWithData(Template.che);
                UI.insert(modal, document.getElementsByClassName("wrapper")[0])
            }
            if(t=='Text') {
                modal = UI.renderWithData(Template.te);
                UI.insert(modal, document.getElementsByClassName("wrapper")[0])
            }
            if(t=='Paragraph') {
                modal = UI.renderWithData(Template.parag);
                UI.insert(modal, document.getElementsByClassName("wrapper")[0])
            }
            if(t=='Radio') {
                modal = UI.renderWithData(Template.radi);
                UI.insert(modal, document.getElementsByClassName("wrapper")[0])
            }
            if(t=='Checkbox') {
                modal = UI.renderWithData(Template.che);
                UI.insert(modal, document.getElementsByClassName("wrapper")[0])
            }
            modal = UI.renderWithData(Template.codeSpace);
            UI.insert(modal, document.getElementsByClassName("wrapper")[0])
            return userData.find().fetch();
        }
    Template.survey_show.events({
        'click .back': function(event, template){
            $('.result').remove();
            $('.result1').remove();
            Router.go('survey');
        },
        'click .back2': function(event, template){
            $('.result').remove();
            $('.result1').remove();
            Router.go('surveyresult');
        }
    })
    Template.codeSpace.events({
        'click .execute': function(event, template){
            $('.cosho').val('');
            var str = document.getElementById("TextArea").value;
            exe = eval(str);
            $('.cosho').val($('.cosho').val()+ exe);
        }})
    Template.quiz_form.events({
        'click .addq': function(event, template){
            O_no=$('input:text[class=options]').val();
            var z = document.getElementsByName('opti');
            type=z[0].options[z[0].selectedIndex].value;
            ar[target]=O_no;
            choice[target]=type;
            console.log(type);
            div1.innerHTML = div1.innerHTML + "Q"+so+". <input type ='text' class=q"+target+"> <br /> "
            for (var w=0;w<O_no;w++)
            {
                if(type=='Text')
                {
                    div1.innerHTML = div1.innerHTML + "<input type='text' value='Answer' id=o"+w+" > <br />"
                    w=O_no;
                }
                if(type=='Radio')
                {
                    div1.innerHTML = div1.innerHTML + "<input type='radio' value='Enter Option' id=o"+w+" >" + "<input type='text' value='Enter Option' id="+w+" > <br />"
                }
                if(type=='Paragraph')
                {
                    div1.innerHTML = div1.innerHTML + "<input type='textarea' value='Answer Area' id=o"+w+" > <br />"
                    w=O_no;
                }
                if(type=='Checkbox')
                {
                    div1.innerHTML = div1.innerHTML + "<input type='checkbox' value='Enter Option' id=o" + w + " >" + "<input type='text' value='Enter Option' id="+w+" > <br />"
                }
            }
            so++;
            target++;
        },
        'click .subut': function(event, template){
            $('.form').remove();
            var mrmid;
//            Router.go('Output');
            for(var po=0;po<so-1;po++){
                question[po]=$('.q'+po+'').val();
                userData.insert({Question : question[po]})
                obj[po]=$('.o'+po+'').val();
                userData.insert({Choice : obj[po]});
            }
              var rex=userData.find().fetch();
              console.log(rex);
              userData.insert({ user_choice : choice });
              userData.insert({ No_of_options : ar});
              console.log(ar);
              console.log(choice);
              console.log(so);
//                for(var w=1;w<=so;w++){
//                if(type=='Text'){
//                    var v = $('input:text[id='+w+']').val();
//                    userData.insert({User_Response :
//                    { Question : w,
//                      User_Choice : v
//                    }})                }
//                if(type=='Radio'){
//                    var x = document.getElementById(w).checked;
//                    var v = $('input:text[id='+x+']').val();
//                    userData.insert({User_Response :
//                    { Question : w,
    //                        User_Choice : v
    //                    }})                }
    //                if(type=='Paragraph'){
    //                    var v = $('input:text[id='+w+']').val();
    //                    userData.insert({User_Response :
    //                    { Question : w,
    //                        User_Choice : v
    //                    }})                }
    //                if(type=='Checkbox') {
    //                    var x = document.getElementById(w).checked;
    //                    var v = $('input:text[id='+x+']').val();
    //                    userData.insert({User_Response :
    //                    { Question : w,
    //                        User_Choice : v
    //                    }})                }
    //            }
    //               var t=userData.find().fetch();
    //               console.log(t);

            }
    })
      Template.Output.events({

      })
}
