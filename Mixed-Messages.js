const randomNumber = () =>{
    return Math.floor(Math.random() * 9);
}

const messages = () =>{
    
    let message = [
        "Legal papers might need attention today, Aries. This could concern a positive development in financial matters. Though you might not be too clear on the language, you will still be glad to do it since it could represent a highly desirable turn of events for you. New self-confidence could result. You could find more interesting people drawn into your aura. Sparkle and shine!",
        "A new romance or friendship could develop with someone who's very creative and shares your spiritual values. This is a very positive development, Taurus. Just avoid idealizing your new friend. This person is human like everyone else, and needs to be loved as is. Don't create an unrealistic impression of the person. If you acknowledge and accept this, a rewarding new relationship could result.", 
        "You could have heightened psychic awareness today, Gemini. You will probably notice it first when you pick up thoughts and feelings of family members, perhaps coming up with the same words at the same time. You may notice this phenomenon more throughout the day. You might experience visions or powerful premonitions. Make the most of this ability. It can increase your understanding of others.",
        "Someone who lives near you who may not have said much to you before could suddenly strike up a conversation that results in a new friendship, Cancer. You could be wondering why you didn't speak to him or her before. You could share a number of interests, and because of that, you could learn about some new group activities. Don't push too hard, and don't idealize your new friend.", 
        "Some paperwork might need execution today, Leo. This may be tedious, but it's apt to open new doors for you and pave the way to more success and good fortune. Writing or speaking might be involved in some way, and modern technology plays a definite part in what you will be doing. This could lead to valuable contacts and new friendships. Explore your options.", 
        "Strong intuitive rapport with someone who lives far away could create a desire to contact this person. This is a good idea, Virgo, as this person may be going through a positive transition in life and eager to share the news. This communication could bring you closer together, so go for it. Whatever is happening with your friend could spill over into your life in some way.", 
        "Your intuition could bring you an interesting opportunity to increase your income in an unconventional way. Others may think the idea strange, Libra, but for you it's definitely worth considering. Check all the pros and cons, talk to people in the know, and then give it some serious thought. Whether this is the source or not, an increased level of financial security is strongly indicated now.",
        "A temporary lack of funds might interfere with creative projects or your ability to have fun, Scorpio. You might encounter an apparent coolness from a close friend or romantic partner that you might not understand. Don't make too much of it. This probably relates more to the person's general mood than to anything you've said or done. Your friend should be back to normal in a few days.",
        "If you spend the day at home, Sagittarius, the walls may seem to close in around you. Squabbles over nothing could erupt between you and other household members, and a lack of energy could plague you. This is a good day to get some exercise. Take a walk, ride a bike, or take a cardio class. This should work off your frustrations while creating more physical energy.",
        "Some intense dreams about someone you haven't seen for a long time could have you wondering what this person is doing now, Aquarius. It might also awaken the desire to be in contact again. Call if you can. You might be pleasantly surprised. An increased psychic sensitivity could cause you to better understand the thoughts and feelings of family members. Communication of all kinds should go well today."
    ]
    
    console.log(message[randomNumber()])
}

messages()
