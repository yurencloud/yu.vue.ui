import YuButton from './components/button'
import YuButtonGroup from './components/button-group'
import YuInput from './components/input'
import YuOption from './components/option'
import YuRadio from './components/radio'
import YuRadios from './components/radios'
import YuSelect from './components/select'
import YuCounter from './components/counter'
import YuCheckbox from './components/checkbox'
import YuDialog from './components/dialog'
import YuTooltip from './components/tooltip'
import YuCollapseItem from './components/collapse-item'
import YuCollapse from './components/collapse'
import YuMenuItem from './components/menu-item'
import YuCheckboxs from './components/checkboxs'
import YuLoading from './components/loading'
import YuCounterSide from './components/counter-side'
import YuCascader from './components/cascader'
import YuSwitch from './components/switch'
import YuDropdown from './components/dropdown'
import YuDropdownMenu from './components/dropdown-menu'
import YuDropdownItem from './components/dropdown-item'
import YuBreadcrumb from './components/breadcrumb'
import YuBreadcrumbItem from './components/breadcrumb-item'
import YuSlider from './components/slider'
import YuTimePicker from './components/time-picker'
import YuScrollSelect from './components/scroll-select'
import YuDatePicker from './components/date-picker'
import YuUpload from './components/upload'
import YuRate from './components/rate'
import YuForm from './components/form'
import YuField from './components/field'
import YuSteps from './components/steps'
import YuStep from './components/step'
import YuTabs from './components/tabs'
import YuTabsItem from './components/tabs-item'
import YuTabsNav from './components/tabs-nav'
import YuNotification from './components/notification'
import YuAlert from './components/alert'
import YuMessage from './components/message'
import YuMessageBox from './components/message-box'
import YuBadge from './components/badge'
import YuProgress from './components/progress'
import YuTag from './components/tag'
import YuTable from './components/table'
import YuFixedTable from './components/fixed-table'
import YuPagination from './components/pagination'
import YuPopover from './components/popover'
import MessageUtil from './components/message.util'
import NotificationUtil from './components/notification.util'
import AlertUtil from './components/alert.util'
import ConfirmUtil from './components/confirm.util'
import PromptUtil from './components/prompt.util'


const version = '2.2.0'

const components = [
  YuTooltip,
  YuDialog,
  YuButton,
  YuButtonGroup,
  YuInput,
  YuOption,
  YuRadio,
  YuRadios,
  YuSelect,
  YuCounter,
  YuCheckbox,
  YuCollapseItem,
  YuCollapse,
  YuMenuItem,
  YuCheckboxs,
  YuLoading,
  YuCounterSide,
  YuCascader,
  YuSwitch,
  YuDropdown,
  YuDropdownMenu,
  YuDropdownItem,
  YuBreadcrumb,
  YuBreadcrumbItem,
  YuSlider,
  YuTimePicker,
  YuScrollSelect,
  YuDatePicker,
  YuUpload,
  YuRate,
  YuForm,
  YuField,
  YuSteps,
  YuStep,
  YuTabs,
  YuTabsItem,
  YuTabsNav,
  YuNotification,
  YuAlert,
  YuMessage,
  YuMessageBox,
  YuBadge,
  YuProgress,
  YuTag,
  YuTable,
  YuFixedTable,
  YuPagination,
  YuPopover,
]

// 在Vue全局安装一些快捷方法
function install(Vue, opts = {}) {
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
  Vue.prototype.$message = MessageUtil
  Vue.prototype.$notify = NotificationUtil
  Vue.prototype.$notify = NotificationUtil
  Vue.prototype.$alert = AlertUtil
  Vue.prototype.$confirm = ConfirmUtil
  Vue.prototype.$prompt = PromptUtil
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default components

export {
  version,
  install,
  YuTooltip,
  YuDialog,
  YuButton,
  YuButtonGroup,
  YuInput,
  YuOption,
  YuRadio,
  YuRadios,
  YuSelect,
  YuCounter,
  YuCheckbox,
  YuCollapseItem,
  YuCollapse,
  YuMenuItem,
  YuCheckboxs,
  YuLoading,
  YuCounterSide,
  YuCascader,
  YuSwitch,
  YuDropdown,
  YuDropdownMenu,
  YuDropdownItem,
  YuBreadcrumb,
  YuBreadcrumbItem,
  YuSlider,
  YuTimePicker,
  YuScrollSelect,
  YuDatePicker,
  YuUpload,
  YuRate,
  YuForm,
  YuField,
  YuSteps,
  YuStep,
  YuTabs,
  YuTabsItem,
  YuTabsNav,
  YuNotification,
  YuAlert,
  YuMessage,
  YuMessageBox,
  YuBadge,
  YuProgress,
  YuTag,
  YuTable,
  YuFixedTable,
  YuPagination,
  YuPopover,
}
