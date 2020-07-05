handle_response_functions.read_and_decide = function(config, CT, magpie, answer_container_generator, startingTime) {
    const $view = $(".magpie-view")
    $view.append(answer_container_generator(config, CT));
    $('.magpie-view-stimulus-container').addClass('magpie-nodisplay')
    const $start = $('.magpie-lad-start').addClass('magpie-nodisplay')

    setTimeout(function() {
        $start.removeClass('magpie-nodisplay')
        $start.click(function (evt) {
            config.data[CT].mousetracking.start({x: evt.originalEvent.clientX, y: evt.originalEvent.clientY})
            $('#img1').on(config.decisionEvent, function () {
                submit('left')
            })
            $('#img2').on(config.decisionEvent, function () {
                submit('right')
            })
            $start.remove()
            $view.append($(`<div class="magpie-lad-start">${config.data[CT].question}</div>`))
        })
    }, 2000)

    function submit(position) {
        let response = (position === config.data[CT].target_location)? 'target' : 'competitor'

        // For filler trials we compare with the expected response
        if (config.data[CT].condition === 'control' && config.data[CT].expected_response) {
            const label = position === config.data[CT].target_location? config.data[CT].label_target : config.data[CT].label_competitor
            response = (label === config.data[CT].expected_response)? 'target' : 'competitor'
        }

        const RT = Date.now() - startingTime; // measure RT before anything else
        let trial_data = {
            trial_name: config.name,
            trial_number: CT + 1,
            response,
            RT: RT
        };

        trial_data = magpieUtils.view.save_config_trial_data(config.data[CT], trial_data);
        magpie.trial_data.push(trial_data);
        magpie.findNextView();
    }
};

answer_container_generators.read_and_decide = function(config, CT) {
    const path = config.imagePath
    let left, right
    // randomize location allocation
    if (Math.random() > 0.5) {
        left = config.data[CT].label_target
        config.data[CT].target_location = 'left'
        right = config.data[CT].label_competitor
        config.data[CT].competitor_location = 'right'
    } else {
        left = config.data[CT].label_competitor
        config.data[CT].competitor_location = 'left'
        right = config.data[CT].label_target
        config.data[CT].target_location = 'right'
    }

    return `<div class='magpie-view-answer-container'>
                            <div class='magpie-view-picture magpie-response-picture magpie-response-picture-left' id="img1">${left}</div>
                            <div class='magpie-view-picture magpie-response-picture magpie-response-picture-right' id="img2">${right}</div>
                            <p class="clearfix"></p>
                            <p>&nbsp;</p>
                            <p>&nbsp;</p>
                            <p>&nbsp;</p>
                            <p>&nbsp;</p>
                            <p>&nbsp;</p>
                            <p>&nbsp;</p>
                        <button class="magpie-lad-start">Start</button>
                    </div>`;
};

stimulus_container_generators.read_and_decide = function(config, CT) {
    return `<div class='magpie-view'>
                    <h1 class='magpie-view-title'>${config.title}</h1>
                </div>`;
};

view_info_dict.read_and_decide =  {
    type: "trial",
    default_title: "",
    default_button_text: "",
    default_view_temp: stimulus_container_generators.read_and_decide,
    default_answer_temp: answer_container_generators.read_and_decide,
    default_handle_response: handle_response_functions.read_and_decide
};
