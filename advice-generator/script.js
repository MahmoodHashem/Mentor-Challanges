


const advice = document.getElementById('qoute'); 
const adviceNumber = document.getElementById('advice'); 


const generator = document.querySelector('.dice'); 


const quoteList = [
        "Always trust your instincts.",
        "Drink plenty of water every day.",
        "Be kind to yourself and others.",
        "Take time to relax and unwind.",
        "Practice gratitude daily.",
        "Don’t be afraid to ask for help when you need it.",
        "Keep learning and expanding your knowledge.",
        "Stay positive and focus on the good in life.",
        "Practice mindfulness and be present in the moment.",
        "Pursue your passions and hobbies.",
        "Don’t compare yourself to others.",
        "Surround yourself with positive and supportive people.",
        "Take time to exercise and move your body.",
        "Set goals and work towards achieving them.",
        "Be open to new experiences and opportunities.",
        "Practice forgiveness and let go of grudges.",
        "Live authentically and be true to yourself.",
        "Take care of your mental health.",
        "Express gratitude regularly to those around you.",
        "Don’t be afraid to take risks and step out of your comfort zone.",
        "Embrace change and see it as an opportunity for growth.",
        "Practice self-care and prioritize your well-being.",
        "Be patient and trust the timing of your life.",
        "Learn to let go of things that no longer serve you.",
        "Cultivate a positive mindset and outlook on life.",
        "Choose happiness and positivity every day.",
        "Trust in the journey and believe in yourself.",
        "Smile often and spread positivity to others.",
        "Practice self-love and self-compassion.",
        "Take time for self-reflection and introspection.",
        "Nurture your relationships and make time for loved ones.",
        "Be mindful of your words and actions.",
        "Practice gratitude for the little things in life.",
        "Set boundaries and prioritize your mental and emotional well-being.",
        "Find joy in the simple things.",
        "Practice acceptance and let go of the need for control.",
        "Limit your screen time and spend more time in nature.",
        "Listen to your body and prioritize your health.",
        "Practice forgiveness, both towards yourself and others.",
        "Cultivate a positive and optimistic mindset.",
        "Find ways to bring more laughter and joy into your life.",
        "Take time to rest and recharge.",
        "Learn to say no and prioritize your own needs.",
        "Practice empathy and compassion towards others.",
        "Be open to feedback and continuous self-improvement.",
        "Make time for hobbies and activities that bring you joy.",
        "Practice deep breathing and relaxation techniques.",
        "Surround yourself with positive influences and energy.",
        "Seek out new experiences and opportunities for growth.",
        "Remember to celebrate your achievements, no matter how small.",
        "Practice patience and trust in the process.",
        "Choose kindness and compassion in your interactions with others.",
        "Embrace failure as a learning opportunity.",
        "Take time to appreciate the beauty in the world around you.",
        "Prioritize your mental health and well-being.",
        "Cultivate a sense of gratitude for all that you have.",
        "Practice mindfulness and being present in the moment.",
        "Trust that everything will work out in the end.",
        "Reflect on your values and make decisions that align with them.",
        "Find a healthy balance between work and leisure.",
        "Practice self-awareness and self-reflection.",
        "Seek out new experiences and challenges.",
        "Stay curious and continue to learn and grow.",
        "Practice active listening and empathy towards others.",
        "Treat yourself with kindness and compassion.",
        "Stay true to yourself and your values.",
        "Practice forgiveness and letting go of grudges.",
        "Surround yourself with positive and supportive people.",
        "Be open to feedback and willing to learn from your mistakes.",
        "Take time to relax and recharge when needed.",
        "Practice gratitude for the little things in life.",
        "Set boundaries and prioritize your mental and emotional well-being.",
        "Create a daily routine that supports your overall well-being.",
        "Cultivate a positive mindset and outlook on life.",
        "Find joy in the simple things in life.",
        "Challenge yourself to step out of your comfort zone.",
        "Embrace change and see it as an opportunity for growth.",
        "Practice kindness and compassion towards yourself and others.",
        "Take time to appreciate the beauty in the world around you.",
        "Stay connected with loved ones and nurture your relationships.",
        "Make time for self-care and prioritize your well-being.",
        "Practice mindfulness and being present in the moment.",
        "Find ways to bring more laughter and joy into your life.",
        "Set goals and work towards achieving them.",
        "Be open to new experiences and opportunities.",
        "Create a support network of friends and loved ones.",
        "Remember to celebrate your achievements, no matter how small.",
        "Reflect on your values and make decisions that align with them.",
        "Stay true to yourself and your beliefs.",
        "Trust in yourself and your abilities.",
        "Take time to rest and recharge when needed.",
        "Practice gratitude and appreciation for all that you have.",
        "Stay positive and focus on the good in life.",
        "Remember to take care of your physical health.",
        "Stay connected with nature and the world around you.",
        "Practice forgiveness and letting go of negativity.",
        "Be kind to yourself and others.",
        "Cultivate a sense of kindness and compassion.",
        "Learn to appreciate the present moment.",
        "Trust in the journey and believe in yourself.",
    ]

    generator.addEventListener('click', generateQuote); 


function generateQuote(){
    let index = Math.floor(Math.random() * 100);
    let quote =  quoteList[index]; 
    adviceNumber.textContent = `Adive #${index+1}`
    advice.textContent = quote; 
}


