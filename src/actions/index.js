export function selectBook(book) {
    console.log("Selected book is ",book.title);
    // This function is action creator. It must return action object with type property.
    return {
        type: 'BOOK_SELECTED',
        payload:book
    }
}