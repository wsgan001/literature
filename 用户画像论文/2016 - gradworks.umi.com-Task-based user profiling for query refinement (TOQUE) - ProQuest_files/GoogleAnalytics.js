var funcDelay=null;function pushDataToGA(a){window.dataLayer=window.dataLayer||[];dataLayer.push({dataValue:a})}function pushEventWithDataToGA(a,b){window.dataLayer=window.dataLayer||[];dataLayer.push({event:a,dataValue:b})}function pushEventToGA(a){window.dataLayer=window.dataLayer||[];dataLayer.push({event:a})}function sendPageTitleToGA(a){window.dataLayer=window.dataLayer||[];dataLayer.push({AnalyticsPageTitle:a})}function sendAnalyticsProductNameGA(a){window.dataLayer=window.dataLayer||[];dataLayer.push({AnalyticsProductName:a})}function sendAnalyticsPublisherNameGA(a){window.dataLayer=window.dataLayer||[];dataLayer.push({AnalyticsPublisherName:a})}function fireTextEntryEvent(b,a){if(b.keyCode==13){pushEventToGA(a)}}function selectedValueToDataLayer(){var a=document.getElementById("itemsPerPage").value;pushEventWithDataToGA("onChange",a)}function gaAdvancedSearchSelectValueToDataLayer(c){var a=document.getElementById(c);var b=a.options[a.selectedIndex].innerHTML;pushEventWithDataToGA("advancedSearchDropdownChange",b)}function gaSortBrowseIssuesSelectValueToDataLayer(c){var a=document.getElementById(c);var b=a.options[a.selectedIndex].innerHTML;pushEventWithDataToGA("sortBrowseIssueDropdownChange",b)}function gaSortResultsSelectValueToDataLayer(c){var a=document.getElementById(c);var b=a.options[a.selectedIndex].innerHTML;pushEventWithDataToGA("sortResultsDropdownChange",b)}function gaOpenAthensLoginSelectValueToDataLayer(c){var a=document.getElementById(c);var b=a.options[a.selectedIndex].innerHTML;pushEventWithDataToGA("openAthensLoginDropdownChange",b)}function scholarUniverseCheckBoxTree(a){pushEventWithDataToGA("onClick",a)}function gaSelectDeselectCheckbox(b,a){var c=b.checked;if(c){pushEventWithDataToGA(a+"Select","Select")}else{pushEventWithDataToGA(a+"Deselect","Deselect")}}function gaSelectDeselectCheckboxWithValue(c,a,b){var d=c.checked;if(d){pushEventWithDataToGA(a+"Select",b)}else{pushEventWithDataToGA(a+"Deselect",b)}}function gaDocViewIndexingTermsCollapseExpand(){if(document.getElementById("indexSearchTermsLink").getAttribute("aria-expanded")=="true"){pushEventWithDataToGA("indexingTermsEvent","Collapse")}else{pushEventWithDataToGA("indexingTermsEvent","Expand")}}function gaRelatedDocsExpandCollapse(a){if(a=="ebrary"){if(document.getElementById("relatedDocs_ebrary").getAttribute("aria-expanded")=="true"){pushEventWithDataToGA("relatedDocsEbraryEvent","Collapse")}else{pushEventWithDataToGA("relatedDocsEbraryEvent","Expand")}}}function advancedSearchBoxTextEntryEvent(c,b,a){if(c.keyCode==13){if(b=="advancedSearchTextEnterKeyPress"){if(a=="queryTermField"){pushEventWithDataToGA("advancedSearchTextEntryEvent","TextArea1")}if(a.indexOf("queryTermField_")>-1){var d=a.split("_");if(d[1]=="0"){pushEventWithDataToGA("advancedSearchTextEntryEvent","TextArea2")}else{pushEventWithDataToGA("advancedSearchTextEntryEvent","TextArea"+((parseInt(d[1])+1)*2))}}if(a.indexOf("queryTermFieldRight_")>-1){var d=a.split("_");if(d[1]=="0"){pushEventWithDataToGA("advancedSearchTextEntryEvent","TextArea3")}else{pushEventWithDataToGA("advancedSearchTextEntryEvent","TextArea"+(((parseInt(d[1])+1)*2)+1))}}}pushEventToGA(b)}};