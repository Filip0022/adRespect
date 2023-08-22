const toggleSearch = () => {
    let search = document.getElementById('search')
    if (search.classList.contains('search-active')) {
        search.classList.remove('search-active')
    } else {
        search.classList.add('search-active')
        document.getElementById('search-input').focus()
    }
}
