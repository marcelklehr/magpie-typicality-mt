const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  text: `Welcome to the experiment!
            <br />
            Thank you for your interest in participating and making an important contribution to the world of science!
            <br />
            In this experiment you will be asked to decide which category an animal belongs to.
            The whole experiment will take about 10 minutes.
            <br />
            <br />
            Important: If possible, please use a computer or laptop with an external mouse to participate in this study, rather than mobile devices like phones or tablets. 
            This will make navigating the online experiment a lot easier for you.
            <br />
            Please also note that the whole experiment will be in english. If you have trouble understanding something, please just continue with the experiment and state 
            your difficulties in the comment section at the end of experiment.
            <br />
            Please press 'Continue' to see the experiment instructions.`,
  buttonText: 'Continue'
});

// For most tasks, you need instructions views
const instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'General Instructions',
  text: `Important: Please leave your browser window at the same size as your computer screen during the experiment.
            <br />
            <br />
            In this experiment you will first see two category names in the upper corners of the screen.
            You will have time to read the categories and then after a few seconds a 'Start' button will appear at the bottom.
            Upon pressing the 'Start' button, the name of an animal will appear in its place.
            It is your task to judge to which of the two presented categories the animal belongs to.
            <br />
            Indicate your choice by clicking on the respective category.
            <br />
            Try to make your choices as accurate and fast as possible!
            <br />
            <br />
            Before we start the actual experiment there will be a few practice trials such that you can get an idea on
            how the experiment will look like.
            <br />
            Please press 'Start practice trials' to continue.`,
  buttonText: 'Start practice trials'
});

const pre_test = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'pre_test',
  title: 'Real experiment',
  text: `Now that you have familiarized yourself with the task, the real experiment starts.
         <br />
         Remember: Try to make your choices as accurate and fast as possible!`,
  buttonText: 'Start experiment'
  // add question about mouse vs. trackpad
});

const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: 'Answering the following questions is optional, but your answers will help us analyze our results.'
  // add question about mouse vs. trackpad
});

const mouse_question = magpieViews.view_generator('forced_choice', {
  trials: 1,
  name: 'mouse_question',
  title: 'Technical information',
  data: [
    {
      question: 'Are you using a mouse or a touch pad with your computer?',
      option1: 'Mouse',
      option2: 'Touch pad'
    }
  ]
})

const hand_question = magpieViews.view_generator('forced_choice', {
  trials: 1,
  name: 'hand_question',
  title: 'Strong hand',
  data: [
    {
      question: 'Are you using your left or right hand with your computer?',
      option1: 'Left',
      option2: 'Right'
    }
  ]
})

const understanding_question = magpieViews.view_generator('rating_scale', {
  trials: 1,
  name: 'understanding_question',
  title: 'Language understanding',
  data: [
    {
      question: 'How confident are you about your understanding of the words?',
      optionLeft: 'Understood nothing',
      optionRight: 'Understood everything'
    }
  ]
})

const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for taking part in this experiment!',
  prolificConfirmText: 'Press the button'
});

const test_trials = magpieViews.view_generator("read_and_decide", {
  trials: trial_info.test_trial.length,
  name: 'read_and_decide_test',
  data: trial_info.test_trial,
  decisionEvent: 'click',
  mousetracking: {
    rate: 24
  }
});

const main_trials = magpieViews.view_generator("read_and_decide", {
  trials: trial_info.main_trial.length,
  name: 'read_and_decide',
  data: trial_info.main_trial,
  decisionEvent: 'click',
  mousetracking: {
    rate: 24
  }
});
