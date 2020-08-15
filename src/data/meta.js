require('dotenv').config()
const {
    META_TITLE,
    META_URL,
    META_DESC,
    META_LANG,
    META_COLOR,
    META_EMAIL,
    META_TELEPHONE
} = process.env

module.exports = {
    title: META_TITLE || 'VOTE 2020: Athens, Georgia',
    url: META_URL || '',
    description: META_DESC || 'The 411 on Athens General Election 2020',
    lang: META_LANG || 'en',
    primaryColor: META_COLOR || '#0071ba',
    email: META_EMAIL || undefined,
    telephone: META_TELEPHONE || undefined,
    dateFormat: 'LLLL dd, yyyy'
}
