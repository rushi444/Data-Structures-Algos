//**Interview Question with Rushi */

const numberOfUpDays = (initialInvestment) => {
    let current = initialInvestment
    let upDays = 0
    for (let i = 0; i < 365; i++) {
      if (downDay(current) > initialInvestment) {
        current = downDay(current)
      } else {
        current = upDay(current)
        upDays++
      }
    }
    return upDays
  }
  
  const upDay = (currentEquity) => currentEquity * 1.5
  
  const downDay = (currentEquity) => currentEquity * 0.5
  
  //**returns 231 days */
  console.log(numberOfUpDays(100))