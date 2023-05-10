# GuitarTabs-Transpose
Google Extension code to transpose chords in the [Guitar Tabs domain](https://www.ultimate-guitar.com/)


![guitarTabsDemo](https://github.com/Sofia-Ortega/GuitarTabs-Transpose/assets/40405324/85a3fb93-3511-45ed-8a22-9a3c081c59a9)





# Getting Started

## Running
1. Run `git clone git@github.com:Sofia-Ortega/GuitarTabs-Transpose.git`
2. Open / Download Chrome
3. Go to chrome://extensions/
4. Toggle Developer Mode in top right corner
5. Click **Load Unpacked** and select the newly cloned directory
6. Navigate to any Chord sheet on Guitar Tabs website ([example link](https://tabs.ultimate-guitar.com/tab/jonathan-ogden/by-the-streams-chords-2261461))
7. Click the extention button - found as a puzzle piece icon besides the search bar 
8. Hit the + or - button depending on where you want to transpose the notes

## Developing
1. Follow the **Running** steps found above
2. Run `npm install -g typescript`
3. Update the typescript files + run `tsc` to convert them to javascript files
4. Go to chrome://extensions/
5. Hit refresh on the extention card after changes to extention 
6. Test them on Chrome
