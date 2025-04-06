import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches
function getInitialTheme() {
	if (localStorage.getItem("theme")) {
		return localStorage.getItem("theme");
	} else {
		return prefersDarkScheme ? "dark" : "light";
	}
}

export const useThemeStore = defineStore('theme', {
		state: ()=> ({
			mode: getInitialTheme() 
		}),
		getters: {
			getTheme: (state) => state.theme.mode
		},
		actions: {
		getInitialTheme() {
			if (localStorage.getItem("theme")) {
				return localStorage.getItem("theme");
			} else {
				return prefersDarkScheme ? "dark" : "light";
			}
		},

		toggleTheme() {
			this.mode = !this.mode.toLowerCase()
			localStorage.setItem('theme', this.mode)
		},
	
		setTheme(mode) {
			const darkMode = 'dark-mode'
			const lightMode = 'light-mode'
	
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


	

  
	

  



