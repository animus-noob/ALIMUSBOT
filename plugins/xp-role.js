let handler = m => m

handler.before = function (m) {
    let user = global.db.data.users[m.sender]
    let role = (user.level <= 3) ? 'Warrior V'
        : ((user.level >= 3) && (user.level <= 6)) ? 'Warrior IV'
            : ((user.level >= 6) && (user.level <= 9)) ? 'Warrior III'
                : ((user.level >= 9) && (user.level <= 12)) ? 'Warrior II'
                    : ((user.level >= 12) && (user.level <= 15)) ? 'Warrior I'
                        : ((user.level >= 15) && (user.level <= 19)) ? 'Elite V'
                            : ((user.level >= 19) && (user.level <= 23)) ? 'Elite IV'
                                : ((user.level >= 23) && (user.level <= 27)) ? 'Elite III'
                                    : ((user.level >= 27) && (user.level <= 31)) ? 'Elite II'
                                        : ((user.level >= 31) && (user.level <= 35)) ? 'Elite I'
                                            : ((user.level >= 35) && (user.level <= 40)) ? 'Master V'
                                                : ((user.level >= 40) && (user.level <= 45)) ? 'Master IV'
                                                    : ((user.level >= 45) && (user.level <= 50)) ? 'Master III'
                                                        : ((user.level >= 50) && (user.level <= 55)) ? 'Master II'
                                                            : ((user.level >= 55) && (user.level <= 60)) ? 'Master I'
                                                                : ((user.level >= 60) && (user.level <= 66)) ? 'Grand Master V'
                                                                    : ((user.level >= 66) && (user.level <= 72)) ? 'Grand Master IV'
                                                                        : ((user.level >= 72) && (user.level <= 78)) ? 'Grand Master III'
                                                                            : ((user.level >= 78) && (user.level <= 94)) ? 'Grand Master II'
                                                                                : ((user.level >= 94) && (user.level <= 100)) ? 'Grand Master I'
                                                                                    : ((user.level >= 100) && (user.level <= 107)) ? 'Epic V'
                                                                                        : ((user.level >= 107) && (user.level <= 114)) ? 'Epic IV'
                                                                                            : ((user.level >= 114) && (user.level <= 121)) ? 'Epic III'
                                                                                                : ((user.level >= 121) && (user.level <= 128)) ? 'Epic II'
                                                                                                    : ((user.level >= 128) && (user.level <= 135)) ? 'Epic I'
                                                                                                        : ((user.level >= 74) && (user.level <= 143)) ? 'Legend V'
                                                                                                            : ((user.level >= 143) && (user.level <= 151)) ? 'Legend IV'
                                                                                                                : ((user.level >= 151) && (user.level <= 159)) ? 'Legend III'
                                                                                                                    : ((user.level >= 159) && (user.level <= 168)) ? 'Legend II'
                                                                                                                        : ((user.level >= 168) && (user.level <= 176)) ? 'Legend I'
                                                                                                                            : ((user.level >= 176) && (user.level <= 185)) ? 'Mythic V'
                                                                                                                                : ((user.level >= 185) && (user.level <= 194)) ? 'Mythic IV'
                                                                                                                                    : ((user.level >= 194) && (user.level <= 203)) ? 'Mythic III'
                                                                                                                                        : ((user.level >= 203) && (user.level <= 212)) ? 'Mythic II'
                                                                                                                                           : ((user.level >= 212) && (user.level <= 221)) ? 'Mythic I'      
                                                                                                                                              : ((user.level >= 221) && (user.level <= 230)) ? 'Mythical Honor'
                                                                                                                                                 : ((user.level >= 230) && (user.level <= 300)) ? 'Mythical Glory'
                                                                                                                                                                                : 'Myhtical Imortal'


    user.role = role
    return true
}

module.exports = handler
