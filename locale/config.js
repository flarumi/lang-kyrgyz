// Kyrgyz tili [ky]
function plural(word, num) {
  const forms = word.split('_')
  return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]) // eslint-disable-line
}
function relativeTimeWithPlural(number, withoutSuffix, key) {
  const format = {
    mm: withoutSuffix ? 'мүнөт_мүнөттөр_мүнөт' : 'мүнөт_мүнөттөр_мүнөт',
    hh: 'саат_саат_саат',
    dd: 'күн_күн_күн',
    MM: 'ай_ай_ай',
    yy: 'жыл_жыл_жыл'
  }
  if (key === 'm') {
    return withoutSuffix ? 'мүнөт' : 'мүнөт'
  }
  return `${number} ${plural(format[key], +number)}`
}

dayjs.locale({
  name: 'ky',
  weekdays: 'Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби'.split('_'),
  weekdaysShort: 'Жкб_Дшб_Шей_Шар_Бшб_Жум_Ишб'.split('_'),
  weekdaysMin: 'Жк_Дб_Ше_Ша_Бш_Жу_Иб'.split('_'),
  months: 'Янв_Фев_Мар_Апр_Май_Июн_Июл_Авг_Сен_Окт_Ноя_Дек'.split('_'),
  monthsShort: 'Янв_Фев_Мар_Апр_Май_Июн_Июл_Авг_Сен_Окт_Ноя_Дек'.split('_'),
  ordinal: n => `${n}.`,
  weekStart: 1,
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMM YYYY в H:mm',
    LLLL: 'D MMM YYYY в H:mm'
  },
  relativeTime: {
    future: '%s аркылуу',
    past: '%s артка',
    s: 'бир нече секунд',
    m: relativeTimeWithPlural,
    mm: relativeTimeWithPlural,
    h: 'саат',
    hh: relativeTimeWithPlural,
    d: 'күн',
    dd: relativeTimeWithPlural,
    M: 'ай',
    MM: relativeTimeWithPlural,
    y: 'жыл',
    yy: relativeTimeWithPlural
  },
})