import { defineStore } from 'pinia'

const getInitialTheme= () => {
	if (localStorage.getItem("theme")) {
		return localStorage.getItem("theme");
	} else {
		return prefersDarkScheme() ? "dark" : "light";
	}
};

const prefersDarkScheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;


export const useThemeStore = defineStore('theme', {
		state: ()=> ({
			theme: getInitialTheme() 
		}),
		getters: {
			getTheme: (state) => state.theme
		},
		actions: {
			setThemeState(mode) {
				this.theme = mode.toLowerCase()
				localStorage.setItem('theme', this.theme)
			},
	
			setTheme(mode) {
				const darkMode = 'dark-mode'
				const lightMode = 'light-mode'
				this.setThemeState(mode);
				
				if (mode === 'light') {
					if (document.documentElement.classList.contains(darkMode)) {
						document.documentElement.classList.remove(darkMode)
					}
					document.documentElement.classList.add(lightMode)
				} else {
					if (document.documentElement.classList.contains(lightMode)) {
						document.documentElement.classList.remove(lightMode)
					}
					document.documentElement.classList.add(darkMode)
				}
			}
		}
	});


	

  
	

  



