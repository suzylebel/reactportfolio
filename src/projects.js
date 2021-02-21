import React from 'react'
import ProjectRow from './projCards/row';

export default function Projects() {
    return (
        <div>
            <ProjectRow 
            background='rgb(229,180,31)'
            title='Workout Tracker'
            repoLink='https://github.com/suzylebel/fitness-tracker' 
            deployLink='https://fitnesstrackersuzy.herokuapp.com/'
            description="This MongoDB application is for users to track their fitness goals by tracking reps, weights, and distance as well as see it graphed out"
            isReversed={false}
            image='/Images/workout.png'
            />
            {/* <ProjectRow
            background='rgb(229,180,31)' 
            title='The Glucose Guardian App'
            repoLink='https://github.com/GlucoseGaurdians/Glucose-Gaurdians' 
            deployLink='https://glucose-guardians.herokuapp.com/'
            description='Our app is designed to be a centralized location for diabetics of all types to track their blood sugar, keep track of their meds and provide trusted resources to answer questions about their questions. Please note, this application is still a work in progress.'
            isReversed={true}
            image='/Images/glucose.png'
            /> */}
            <ProjectRow 
            background='rgb(229,180,31)'
            title='Weather Forecast'
            repoLink='https://github.com/suzylebel/Weather-Forecast' 
            deployLink='https://suzylebel.github.io/Weather-Forecast/'
            description="Search and city and see what the current weather and 5 day forecast is in that city!"
            isReversed={false}
            image='/Images/weather.png'
            />
                {/* <ProjectRow
            background='rgb(229,180,31)' 
            title='Gif N Jelly'
            repoLink='https://github.com/TommyWillen/gifNjelly' 
            deployLink='https://mighty-fjord-82642.herokuapp.com/'
            description='GifNjelly IS A NETWORK TO RATE GIPHYS and is up and coming in the giphy world. Join your friends and add your captions to the giphs around town. Make an account today and rate your favorite giphys around!'
            isReversed={true}
            image='/Images/gifnjelly.png'
            /> */}
             <ProjectRow 
            background='rgb(229,180,31)'
            title='Password Generator'
            repoLink='https://github.com/suzylebel/Password-Generator' 
            deployLink='https://suzylebel.github.io/Password-Generator/'
            description="A random password generator for users to select numbers and characters and length of password"
            isReversed={false}
            image='/Images/password.png'
            />
              <ProjectRow
            background='rgb(229,180,31)' 
            title='Note Taker'
            repoLink='https://github.com/suzylebel/Note-Taker' 
            deployLink='https://notetakersuzy.herokuapp.com/'
            description='A note taker application for a user to keep track of notes!'
            isReversed={true}
            image='/Images/notes.png'
            />
        </div>
        
    )
}