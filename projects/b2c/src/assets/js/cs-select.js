/*
 * NOTE:    This script works better with the following CSS file:
 *          https://gist.github.com/teledirigido/d5e311df185ad23adaf5 (cs_select.scss)


	options = {
		
		# REQUIRED div html tag class for the generated input
		selector: '.classSelector',

		# REQUIRED select html tag class resource.
		select_tag: '.classSelector'
		
		# OPTIONAL when open one, others are close. default = false
		open_one: true | false 

		# OPTIONAL custom classes for fancy styles purporses
		custom_class: {
			selector: 'className',
			placeholder: 'className',
			item: 'className'
		}

		# OPTIONAL | CALLBACK trigger when an option is selected
		on_change: function(){
	
		}
	};
	
	JS USAGE
	-----

	var select = new cs_select({
		
		selector: '.cs-wrapper',
		select_tag: '._select',
		
		custom_class: {
			selector: 'my_custom_class_1',
			placeholder: 'my_custom_class_2',
			item: 'my_custom_class_3'
		},

		on_change: function( obj ){
			console.log(obj);
		}
	});

	select.init();

	HTML USAGE
	----------

	<div class="field cs-wrapper">
		[select class:_select]
	</div>


	MORE NOTES
	----------
	
	- Placeholder text is first option value
	- This plugin requires jQuery
	- This plugin works better with a SCSS file called _cs_select.css
	- This plugin is nice, not a masterpiece but still nice
	- Have a nice day
	- Generated content has the following structure:
	
	<div class="cs-select">
		<span class="cs-placeholder">Colour</span>
		<div class="cs-options">
			 <ul>
				 <li class="cs-item" data-value="hi">Hi</li>
				 <li class="cs-item" data-value="bye">Bye</li>
			 </ul>
		</div>
		<select class="item" name="colour" id="colour">
			 <option value="">Colour</option>
			 <option value="hi">Hi</option>
			 <option value="bye">Bye</option>
		</select>
	</div>    

*/
var cs_select = function( options ){

	this.options = options;

	this.init = function () {
		
		var _self = this,
			_el = _self.options.selector,
			_select = _self.options.select_tag;


		_self.options.open_one = ( typeof _self.options.open_one === 'undefined' ? false : _self.options.open_one );

		_self._renderSelect();
		_self._didClickOutsite();

	};

	this._renderSelect = function() {

		var _self = this,
			_el = _self.options.selector,
			_select = _self.options.select_tag;

		$( _select ).each(function(){
			
			_self._generateSelect( $(this) , function ( el ){

				el.parent().css('height', $(_el).find('span.cs-placeholder').outerHeight() + 4 );

				el.parent().click( function (ev) {
					
					if( $(this).hasClass('cs-active') ){
						
						$(this)
							.removeClass('cs-active')
							.css('height', $(_el).find('span.cs-placeholder').outerHeight() + 4 );
   
					} else {

						_self.options.open_one === true && _self._closeOptions();

						$(this).addClass('cs-active');
						_self._addHeight( $(this) );

					}

				});

				el.parent().find('.cs-item').on('click', function (ev) {
			
					_self.selected = { 
						string: $(this).html(),
						value: $(this).data('value')
					};

					el.parent().find('.cs-placeholder').html( _self.selected.string );
					el.parent().find('select').val( _self.selected.value );
					
					if ("createEvent" in document) {
					    var evt = document.createEvent("HTMLEvents");
					    evt.initEvent("change", false, true);
					    el.parent().find('select')[0].dispatchEvent(evt);
					}
					else
					    el.parent().find('select')[0].fireEvent("onchange");

					typeof _self.options.on_change === 'function' && _self.options.on_change( _self );

				});

			});

		});

	};

	this._didClickOutsite = function(){
		
		var _self = this;

		$(document).mouseup( function (e) {

			var _container = $(_self.options.selector);

			if (!_container.is(e.target) && _container.has(e.target).length === 0){
				_self._closeOptions();
			}
		});

	};

	this._closeOptions = function(){
		var _self = this;

		$(_self.options.selector)
			.find('.cs-select')
			.removeClass('cs-active')
			.css('height' , $(_self.options.selector).find('.cs-select .cs-placeholder').outerHeight() + 4 );
	}

	this._addHeight = function ( el ) {
		
		var cs_options = el.find('.cs-options ul').outerHeight(),
			cs_placeholder = el.find('.cs-placeholder').outerHeight();

		el.css('height', cs_options + cs_placeholder + 4 );

	};

	this._generateSelect = function ( el , callback ) {
		var _self = this,
			placeholder = el.find('option:first').text();
		
		el.hide();

		// Wrap cs-select
		el.wrapAll('<div class="cs-select"></div>');

		if( typeof _self.options.custom_class !== 'undefined' && typeof _self.options.custom_class.selector !== 'undefined' && _self.options.custom_class.selector !== '' ){
			el.parent().addClass(_self.options.custom_class.selector);
		}

		// Insert placeholder
		el.before('<span class="cs-placeholder">'+ placeholder+'</span>');
		if( typeof _self.options.custom_class !== 'undefined' && typeof _self.options.custom_class.placeholder !== 'undefined' && _self.options.custom_class.placeholder !== '' ){
			el.prev().addClass(_self.options.custom_class.placeholder);
		}

		// Insert Options
		el.before('<div class="cs-options"><ul></ul></div>');
			
		for( var i = 0 ; i < el.find('option').length ; i++ ){

			var tag_text = $(el.find('option')[i]).context.innerText,
				tag_val = $(el.find('option')[i]).val();

			if( $(el.find('option')[i]).val() !== '' ){
				el.parent().find('.cs-options ul').append('<li class="cs-item" data-value="'+tag_val+'">'+ tag_text +'</li>');
			}

			tag_text = null 
			tag_val = null;

		}

		if( typeof _self.options.custom_class !== 'undefined' && typeof _self.options.custom_class.item !== 'undefined' && _self.options.custom_class.item !== '' ){
			el.parent().find('.cs-options ul li').addClass(_self.options.custom_class.item);
		}

		callback( el );

	};

};