const layout = require('../layout');

module.exports = () => {
	return layout({
		content: `
            <section class="body-smart-insights">
                <div class="why__container">
                    <div class="why__text">
                        <h1>Why Artilytics?</h1>
                        <p><img src="/img/arrow.svg" alt="">Artilytics brings together all technologies marketers need to deliver personalized
                          experiences under a single, highly usable platofrm,
                        </p>
                        <p><img src="/img/arrow.svg" alt="">We are empowering marketers to work freely and focus on their actual work, without depending
                          on a team of data scientists and IT teams.
                        </p>
                        <p><img src="/img/arrow.svg" alt="">They can easily leverage actionable segments, make changes on their websites and apps by 
                          deploying personalization, and start tracking performance in minutes
                        </p>
                        <p><img src="/img/arrow.svg" alt="">Artilytics brings the disjointed worlds of adtech and martech together. Now marketers are
                            able to push predictive segments into 3rd party and platforms such as Facebook and Google
                            AdWords, optimizing their marketing spend.                      
                        </p>
                    </div>
                  </div>
            </section>
        `
	});
};
