/** [STANDARDIZATION CHECKLIST] UI-only, no inline classes, ESLint clean */
import { createProductPageLuxury } from '../utils/createProductPageLuxury'
import RollerBlindsCarouselStandardized from '../components/RollerBlindsCarouselStandardized'

const RollerBlindsPage = createProductPageLuxury('roller-blinds', RollerBlindsCarouselStandardized)

RollerBlindsPage.displayName = 'RollerBlindsPage'

export default RollerBlindsPage