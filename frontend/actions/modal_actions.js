export const SHOW_MODAL = "SHOW_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const SHOW_GALLERY = 'SHOW_GALLERY';

export const showGallery = (modal, photos, idx) => ({
	type: SHOW_GALLERY,
	modal: modal,
	photos: photos,
	idx: idx
})

// `props` is passed through to the modal component (e.g. { bookingId }).
export const showModal = (modal, props = {}) => ({
	type: SHOW_MODAL,
	modal: modal,
	props
});

export const closeModal = () => ({
	type: CLOSE_MODAL,
});
