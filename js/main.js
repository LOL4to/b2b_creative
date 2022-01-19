$(document).ready(function () {
	//--------------- Мобильное меню ---------------//
	var menuButton = document.querySelector(".menu-button");
	menuButton.addEventListener("click", function () {
		document
			.querySelector(".header__navbar")
			.classList.toggle("header__navbar--visible");
		document.body.classList.toggle("body--visible");
	});


	//--------------- Вызов модального окна ---------------//

	var modalButton = $("[data-toggle=modal]");
	var closeModalButton = $(".modal__close");
	var closeModalButton_1 = $(".modal__overlay");
	modalButton.on("click", openModal);
	closeModalButton.on("click", closeModal);
	closeModalButton_1.on("click", closeModal);

	function openModal() {
		var targetModal = $(this).attr("data-href");
		$(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
		$(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
	}

	function closeModal(event) {
		event.preventDefault();
		var modalOverlay = $(".modal__overlay");
		var modalDialog = $(".modal__dialog");
		modalOverlay.removeClass("modal__overlay--visible");
		modalDialog.removeClass("modal__dialog--visible");
	}
	$(document).on("keydown", function (e) {
		let key = e.which;
		document.getElementById("universal-modal");
		if (key === 27) {
			var modalDialog = $(".modal__dialog");
			var modalOverlay = $(".modal__overlay");
			modalDialog.removeClass("modal__dialog--visible");
			modalOverlay.removeClass("modal__overlay--visible");
			document.getElementById("universal-modal");
		}
	});

	//--------------- Валидация ----------------//
	$(".about__form").each(function () {
		$(this).validate({
			errorClass: "error",
			messages: {
				name: {
					required: "Введите имя",
					minlength: "Необходимо ввести минимум 2 буквы",
				},
				email: {
					required: "Введите адрес электронной почты",
					email: "Формат эл.почты name@domain.com",
				},
				phone: {
					required: "Телефон обязателен",
					minlength: "Введите номер полностью",
				},
			},
		});
	});
	$(".form").each(function () {
		$(this).validate({
			errorClass: "invalid",
			messages: {
				name: {
					required: "Введите имя",
					minlength: "Необходимо ввести минимум 2 буквы",
				},
				email: {
					required: "Введите адрес электронной почты",
					email: "Формат эл.почты name@domain.com",
				},
				phone: {
					required: "Телефон обязателен",
					minlength: "Введите номер полностью",
				},
				message: {
					required: "Введите текст",
					minlength: "Необходимо ввести минимум 100 символов",
				},
			},
		});
	}); 
	var phone = $('input[name="phone"]');
	$(phone).mask("+7(999) 999-99-99", {
		completed: function () {
			alert("Вы ввели номер телефона: " + this.val());
		},
	});
	// Получение элемента canvas, контекста и свойства Math.PI
	let canvas = document.getElementById("myCanvas");
	let ctx = canvas.getContext("2d");
	let pi = Math.PI;

	ctx.beginPath(); // начало нового пути
	ctx.lineWidth = 3; // толщина обводки 
	ctx.fillStyle = "transparent";
	ctx.strokeStyle = "#bf9037"; // цвет обводки
	// Координаты центра круга, радиус, начальный угол, конечный угол, направление по часовой стрелке
	ctx.arc(330, 330, 328, 0, 1.5 * pi, false);
	ctx.stroke();
	//-------------------------------------------//
	AOS.init();
});
