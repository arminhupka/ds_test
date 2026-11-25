/** The first letters of the first and last word of a name ("Marek Rakowski" → "MR"). */
const getInitials = (name: string) => {
    const words = name.trim().split(/\s+/u).filter(Boolean);
    const first = words.at(0)?.at(0) ?? '';
    const last = words.length > 1 ? words.at(-1)?.at(0) ?? '' : '';

    return `${first}${last}`.toLocaleUpperCase();
};

export { getInitials };
