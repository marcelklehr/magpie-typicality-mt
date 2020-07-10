const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  text: `Hello!
            <br />
            <br />
            Participating in this experiment will take about 10mins of your time. Thank you for donating this time to science.
            <br />
            <br />
            Note: Please use a computer or laptop to participate in this study, rather than mobile devices like phones or tablets.
            <br />
            <br />
            On the next view you will find general instructions on how to proceed.`,
  buttonText: 'begin the experiment'
});

// For most tasks, you need instructions views
const instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'General Instructions',
  text: `In the following you will be given two categories to choose from, as well as, after the click of a button, a word to categorize into one of the two categories. Please try to click on the respective category as quickly a possible while being as accurate as possible.
            <br />
            <br />
            You now have the opportunity to get familiar with the procedure by means of a few test runs.`,
  buttonText: 'go to trials'
});

const pre_test = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'pre_test',
  title: 'Real experiment',
  text: 'Now that you have familiarized yourself with the task, the real experiment starts.',
  buttonText: 'start experiment'
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

const understanding_question = magpieViews.view_generator('forced_choice', {
  trials: 1,
  name: 'understanding_question',
  title: 'Language understanding',
  data: [
    {
      question: 'Did you understand all directions and words?',
      option1: 'Yes',
      option2: 'No'
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
  decisionEvent: 'click'
});

const main_trials = magpieViews.view_generator("read_and_decide", {
  trials: trial_info.main_trial.length,
  name: 'read_and_decide',
  data: trial_info.main_trial,
  decisionEvent: 'click'
});
