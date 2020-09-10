// export default (kharacters, { text }) => {
//     return kharacters.filter( kharacter => {
//         const searchMatch = kharacter.bioText.toLowerCase().includes(text.LowerCase());
//         return searchMatch;
//     });
// };

export default (kharacters, { text }) => {
    return kharacters.filter(link => link ? link.toLowerCase().includes(text.toLowerCase()) : 'none');
};