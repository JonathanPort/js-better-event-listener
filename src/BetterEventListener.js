let moduleName = 'BetterEventListener',
	defaultMethodName = 'bEvent';

export default class BetterEventListener {

	constructor(options = null) {

		this.options = options;
		this.validateAndSetOptions();
		this.attachClassToObjectPrototype();

	}


	/**
	 * Validates options passed by checking if the method name and content type
	 * matches up to predefined array of supported options set below.
	 * Warns to console of option doesn't exist or is an incorrect type.
	 *
	 */
	validateAndSetOptions() {

		if (this.options && typeof this.options === 'object') {

			const acceptedOptions = [
				// { name: 'namespace', type: ['string'] }, For Later
				{ name: 'methodName', type: ['string'] }
			];

			for (let i = 0; i < acceptedOptions.length; i++) {

				let acceptedOption = acceptedOptions[i],
					option,
					validType = false;

				if (this.options.hasOwnProperty(acceptedOption.name)) {

					option = this.options[acceptedOption.name];

					for (let j in acceptedOption.type) {
						if (typeof option == acceptedOption.type[j]) {
							validType = true;
							continue;
						}
					}

					if (! validType) {
						console.warn(`${moduleName}: Option passed through to constructor named "${acceptedOption.name}" is not a valid type supported for this option. The valid types for this option are "${acceptedOption.type.toString()}"`);
						continue;
					}

					this[acceptedOption.name] = option;

				}

			}

		}

	}


	attachClassToObjectPrototype() {

		if (! this.methodName) this.methodName = defaultMethodName;

		if (! Object.prototype.hasOwnProperty(this.methodName)) {

			Object.defineProperty(Object.prototype, this.methodName, {
  				enumerable: false,
  				value: function(event, callback) {
					new EventListener(this, event, callback);
  				}
			});

		} else {
			console.warn(`${moduleName} has already been instanciated. This module attaches the functionality to the global Object.prototype scope and can be accessed anywhere. There's no need to re-import or instanciate a new object after the first declaration.`);
		}

	}

}

class EventListener {

	constructor(el, event, callback) {

		this.el = el;
		this.event = event;
		this.callback = callback;

		this.detectBrowserCompatablity();
		this.isSingleElementCheck();
		this.isSingleEventCheck();
		this.addEventListeners();

	}


	detectBrowserCompatablity() {

		let el = document.createElement('div');

		if (el.addEventListener) 	this.isModern = true;
		if (el.attachEvent) 		this.isModern = false;

	}

	addEventListeners() {

		if (this.isSingleElement) {

			if (this.isModern) {
				this.addEventListener(this.el);
			} else {
				this.attachEvent(this.el);
			}

		} else {

			for (let i = 0; i < this.el.length; i++) {

				if (this.isModern) {
					this.addEventListener(this.el[i]);
				} else {
					this.attachEvent(this.el[i]);
				}

			}

		}

	}

	addEventListener(el) {

		let classThis = this;

		if (this.isSingleEvent) {

			el.addEventListener(this.event, function(e) {

				classThis.callback.call(el, e);

			});

		} else {

			for (let i = 0; i < this.event.length; i++) {

				el.addEventListener(this.event[i], function(e) {

					classThis.callback.call(el, e);

				});

			}

		}

	}

	attachEvent(el) {

		if (this.isSingleEvent) {

			el.attachEvent('on' + this.event, this.callback);

		} else {

			for (let i = 0; i < this.event.length; i++) {

				el.attachEvent('on' + this.event[i], this.callback);

			}

		}

	}

	isSingleEventCheck() {

		if (this.event.constructor === Array) {
			this.isSingleEvent = false;
		} else {
			this.isSingleEvent = true;
		}

	}

	isSingleElementCheck() {

		if (this.el.constructor === NodeList || this.el.constructor === Array) {
			this.isSingleElement = false;
		} else {
			this.isSingleElement = true;
		}

	}

}
