if (Meteor.isClient)
{

    Template.survey.events
    ({
        'click .elements': function (event, template)
        {
            var a = $('input:text[class=roundtext]').val();
            var b = $('input:text[class=timetext]').val();
            var c = $('input:radio[class=rad]:checked').val();
            userData.insert({Turns: a , Roundtime : b , Format: c })
            var z = userData.find().fetch();
            console.log(z);
        }

    })
}
