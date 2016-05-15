var global = {
	categorizedBadgeNames: {
		'progress meters development': [
			{name: 'Forum posts', auto: true, subBadges: [
                {name: 'forum posts: 1'},
                {name: 'forum posts: 100'},
                {name: 'forum posts: 500'},
                {name: 'forum posts: 1000'},
                {name: 'forum posts: 5000'}]
			},
			{name: 'Passing submissions', auto: true, subBadges:[
                {name: 'passing submissions: 1'},
                {name: 'passing submissions: 50'},
                {name: 'passing submissions: 100'},
                {name: 'passing submissions: 250'},
                {name: 'passing submissions: 500'}]
            },
			{name: 'Checkpoint prizes', auto: true, subBadges: [
                {name: 'checkpoint prizes: 1'},
                {name: 'checkpoint prizes: 50'},
                {name: 'checkpoint prizes: 100'},
                {name: 'checkpoint prizes: 250'},
                {name: 'checkpoint prizes: 500'}]
            },
			{name: 'Winning placements', auto: true, subBadges: [
                {name: 'winning placements: 1'},
                {name: 'winning placements: 25'},
                {name: 'winning placements: 50'},
                {name: 'winning placements: 100'},
                {name: 'winning placements: 250'}]
			},
			{name: 'First-place wins', auto: true, subBadges: [
                {name: 'first-place wins: 1'},
                {name: 'first-place wins: 25'},
                {name: 'first-place wins: 50'},
                {name: 'first-place wins: 100'},
                {name: 'first-place wins: 250'}]
			}],
			
		'progress meters studio': [
			{name: 'Forum posts', auto: true, subBadges: [
                {name: 'studio forum posts: 1'},
                {name: 'studio forum posts: 100'},
                {name: 'studio forum posts: 500'},
                {name: 'studio forum posts: 1000'},
                {name: 'studio forum posts: 5000'}]
			},
			{name: 'Passing submissions', auto: true, subBadges:[
                {name: 'studio passing submissions: 1'},
                {name: 'studio passing submissions: 50'},
                {name: 'studio passing submissions: 100'},
                {name: 'studio passing submissions: 250'},
                {name: 'studio passing submissions: 500'}]
            },
			{name: 'Checkpoint prizes', auto: true, subBadges: [
                {name: 'studio checkpoint prizes: 1'},
                {name: 'studio checkpoint prizes: 50'},
                {name: 'studio checkpoint prizes: 100'},
                {name: 'studio checkpoint prizes: 250'},
                {name: 'studio checkpoint prizes: 500'}]
            },
			{name: 'Winning placements', auto: true, subBadges: [
                {name: 'studio winning placements: 1'},
                {name: 'studio winning placements: 25'},
                {name: 'studio winning placements: 50'},
                {name: 'studio winning placements: 100'},
                {name: 'studio winning placements: 250'}]
			},
			{name: 'First-place wins', auto: true, subBadges: [
                {name: 'studio first-place wins: 1'},
                {name: 'studio first-place wins: 25'},
                {name: 'studio first-place wins: 50'},
                {name: 'studio first-place wins: 100'},
                {name: 'studio first-place wins: 250'}]
			}],
			
        'merit groups': [
            {name: 'UI and graphic design', auto: false, subBadges: [
                {name: 'wireframe', auto: false},
                {name: 'desktop app UI', auto: false},
                {name: 'mobile UI', auto: false},
                {name: 'web UI', auto: false},
                {name: 'branding/marketing/presentation', auto: false}]
            },
            {name: 'Implementation', auto: false, subBadges: [
                {name: 'UI development', auto: false},
                {name: 'architecture and design', auto: false},
                {name: 'component development', auto: false},
                {name: 'assembly', auto: false}]
            },
            {name: 'Business analysis', auto: false, subBadges: [
                {name: 'idea generation', auto: false},
                {name: 'conceptualization', auto: false}]
            },
            {name: 'Testing and QA', auto: false, subBadges: [
                {name: 'test scenarios', auto: false},
                {name: 'bug hunts', auto: false}]
            },
            {name: 'Analytics', auto: false, subBadges: [
                {name: 'big data', auto: false}]
            }],

        'HP Badges': [
            {name: 'HP Badges Level 1', auto: false, level:true, subBadges: [
                    {name: 'hpLogo', description:'', auto: false, disabled:true},
                    {name: 'Getting Started', description:'Successfully obtaining an API Key', auto: false},
                    {name: 'Novice', description:'Building a single application using at least one IDOL OnDemand API', auto: false},
                    {name: 'Journeyman', description:'Building two application using two or more IDOL OnDemand APIs, each from different categories', auto: false},
                    {name: 'Expert', description:'Building an application with at least 1 IDOL OnDemand API from each category', auto: false}
                ]
            },

            {name: 'HP Badges Level 2', auto: false, level:true, subBadges: [
                    {name: 'hpLogo', description:'', auto: false},
                    {name: 'Master', description:'5 passing submissions with Level 4 or higher on IDOL Category', auto: false},
                    {name: 'Grand Master', description:'10 passing submissions with Level 4 or higher on IDOL Category', auto: false},
                    {name: 'Paragon', description:'20 passing submissions with Level 4 or higher on IDOL Category', auto: false},
                    {name: 'Grand Paragon', description:'25 passing submissions with Level 4 or higher on IDOL Category', auto: false}
                ]
            },

            {name: 'Social Evangelist', description:'Evangelizing HP IDOL OnDemand in blogs and social media', auto: false}
         ],

		'special': [
			{name: 'Studio Cup top 5', auto: true},
			{name: 'TCO on-site competitor', auto: false},
			{name: 'TopCoder event trip winner', auto: false},
			{name: 'Digital Run top 5', auto: true},
			{name: 'TCO finalist', auto: false},
			{name: 'TCCC on-site competitor', auto: false},
			{name: 'Studio Cup winner', auto: true},
			{name: 'TCO champion', auto: false},
			{name: 'TCCC finalist', auto: false},
			{name: 'Digital Run winner', auto: true},	
			{name: 'Member of the month', auto: false},	
			{name: 'TCCC champion', auto: false}],
		'reviewing': [
			{name: 'Studio spec reviewer', auto: false},
			{name: 'Studio screener', auto: false},
			{name: 'TopCoder reviewer', auto: false}],
		'community': [
			{name: 'Studio spirit', auto: false},
			{name: 'Studio mentor', auto: false},
			{name: 'TopCoder spirit', auto: false},
			{name: 'TopCoder mentor', auto: false}]
	},
	rowMaxSingle: 3,
	rowMaxGroup: 2,
	currentMember: {}
};

function name2cssClass(name) {
	return name.split(/\W+/).join('-');
}

function clearWrappers() {
	var badges = global.badges;
	for (var name in badges) {
		var badge = badges[name];
		var wrapper = badge.wrapper;
		classRemove(wrapper, 'selected');
		var isSubBadge = badge.isSubBadge;
		if (isSubBadge) {
            badge.badge.edited = false;
            classRemove(badge.badge, 'selected');
            checkParentBadge(badge);
        } 
		classRemove(wrapper, 'editRemove');
		classRemove(wrapper, 'editAdd');
		var checkbox = badge.checkbox;
		if (checkbox) {
            checkbox.selected = false;
            checkbox.edited = false;
        }
	}
}

function createGroupBadge(description, badges) {

    var name = description.name;
    var isLevel = description.level && description.level == true;
    var wrapper = document.createElement('div');
    wrapper.className = 'groupBadgeWrapper ' + name2cssClass(name) + '-wrapper';
    
    var editable = (description.auto !== true);
    var checkbox = document.createElement('div');
    checkbox.className = 'checkbox'+(editable ? ' editable' : '');
	classAdd(checkbox, 'nocheck');
    wrapper.appendChild(checkbox);

    var cssClass = name2cssClass(name);
    var badge = document.createElement('div');
    badge.className = 'groupBadge'+' '+ cssClass;
    for (var i = 0; i < description.subBadges.length; ++i) {
        var subName = description.subBadges[i].name;
        var desc = description.subBadges[i].description;
        var disabled = description.subBadges[i].disabled
            && description.subBadges[i].disabled == true;
        var subBadge = document.createElement('span');
        subBadge.className = 'subBadge' + ' ' + name2cssClass(subName) + (isLevel ? ' level' : '');
        badge.appendChild(subBadge);
        
        var badgeRecord = badges[subName] = {name: subName, editable: editable, isSubBadge: true, 
                badge: subBadge, parent: wrapper, description: desc, disabled:disabled};
        
        subBadge.badgeRecord = badgeRecord;
        subBadge.onmouseover = overSubBadge;
        subBadge.onmouseout = outSubBadge;
            
        if (editable) {
            subBadge.onmousedown = downSubBadge;
        }        
    }
            
    var groupBadge = document.createElement('div');
    groupBadge.className = 'subBadge' + ' bigBadge ' + cssClass + '-group';
    badge.appendChild(groupBadge);
    wrapper.appendChild(badge);   
    var badgeRecord = {name: name, editable: editable, isSubBadge: true, 
                badge: groupBadge, parent: wrapper};
    if (editable) {
        //groupBadge.badgeRecord = badgeRecord;
        //groupBadge.onmouseover = overSubBadge;
        //groupBadge.onmouseout = outSubBadge;
        //groupBadge.onmousedown = downSubBadge;
    }

    var label = document.createElement('span');
    label.className = 'label';
    label.innerHTML = name;
    wrapper.appendChild(label);
   
    var badgeRecord = badges[name] = {name: name, editable: editable,
            wrapper: wrapper, checkbox: checkbox, parent: null,
            badge: badge, label: label, isSubBadge: false, isParentBadge: true};
    if (editable) {
        checkbox.badgeRecord = badgeRecord;
        checkbox.onmouseover = overCheckbox;
        checkbox.onmouseout = outCheckbox;
        checkbox.onmousedown = downCheckbox;
    }
    return wrapper;
}

function createSingleBadge(description, badges) {
    var wrapper = document.createElement('div');
    wrapper.className = 'singleBadgeWrapper';
    
    var editable = (description.auto !== true);
    var checkbox = document.createElement('div');
    checkbox.className = 'checkbox'+(editable ? ' editable' : '');
    wrapper.appendChild(checkbox);

    var name = description.name;
    var cssClass = name2cssClass(name);
    var badge = document.createElement('div');
    badge.className = 'singleBadge'+' '+ cssClass;
    badge.title = description.description;
    
    wrapper.appendChild(badge);

    var label = document.createElement('span');
    label.className = 'label';
    label.innerHTML = name;
    wrapper.appendChild(label);
    
    var badgeRecord = badges[name] = {name: name, editable: editable,
            wrapper: wrapper, checkbox: checkbox, subBadges: null, parent: null,
            badge: badge, label: label, isSubBadge: false, isParentBadge: false};
    if (editable) {
        checkbox.badgeRecord = badgeRecord;
        checkbox.onmouseover = overCheckbox;
        checkbox.onmouseout = outCheckbox;
        checkbox.onmousedown = downCheckbox;
    }
    return wrapper;
}

function prepBadges() {
	var categorizedBadgeNames = global.categorizedBadgeNames;
	var badges = global.badges = {};
	var badgeEditor = document.getElementById('badgeEditor');

	for (var category in categorizedBadgeNames) {
		var container = document.createElement('div');
		container.className = 'badgeCategory ' + name2cssClass(category);
		var header = document.createElement('h2');
		header.innerHTML = category.charAt(0).toUpperCase() +
				category.substring(1);
		container.appendChild(header);

		var descriptions = categorizedBadgeNames[category];
		var row = document.createElement('div');
        row.className = 'badgeRow';
        var rowCount = 0;
        var isGroup = descriptions.length && descriptions[0].subBadges;
        var rowMax;
        if (isGroup) {
            rowMax = global.rowMaxGroup;
        } else {
            rowMax = global.rowMaxSingle;
        }
        
		for (var i = 0; i < descriptions.length; i++, rowCount++) {
			var description = descriptions[i];
            var isDescriptionGroup = descriptions.length && descriptions[i].subBadges;
			if (isDescriptionGroup) {
                var wrapper = createGroupBadge(description, badges);
			} else {
                var wrapper = createSingleBadge(description, badges);
			}
			
			if (rowCount == rowMax) {
                container.appendChild(row);
                row = document.createElement('div');
                row.className = 'badgeRow';
                rowCount = 0;
            }
            row.appendChild(wrapper);
		}
		container.appendChild(row);
        badgeEditor.appendChild(container);
	}
}
function getElementViewLeft(element) {
    var actualLeft = element.offsetLeft;
    var current = element.offsetParent;
    while (current !== null) {
        actualLeft += current.offsetLeft;
        current = current.offsetParent;
    }
    if (document.compatMode == "BackCompat") {
        var elementScrollLeft=document.body.scrollLeft;
    } else {
        var elementScrollLeft=document.documentElement.scrollLeft+document.body.scrollLeft;
    }
    return actualLeft-elementScrollLeft;
}
function getElementViewTop(element) {
    var actualTop = element.offsetTop;
    var current = element.offsetParent;
    while (current !== null) {
        actualTop += current. offsetTop;
        current = current.offsetParent;
    }
    if (document.compatMode == "BackCompat"){
        var elementScrollTop=document.body.scrollTop;
    } else {
        var elementScrollTop=document.documentElement.scrollTop+document.body.scrollTop;
    }
    return actualTop-elementScrollTop;
}
function overSubBadge() {
    var subBadge = this;
    var tooltip = document.getElementById('tooltip');
    var tipContent = this.badgeRecord.description ?  this.badgeRecord.description : this.badgeRecord.name;
    tooltip.innerHTML = tipContent;
    tooltip.style.display = 'block';
    tooltip.style.position = 'fixed';
    var width = tipContent.length * 8
    tooltip.style.width =  width + 'px';
    tooltip.style.left = (getElementViewLeft(this) - width / 2 + this.offsetWidth / 2) + 'px';
    tooltip.style.top = (getElementViewTop(this) - 25) + 'px';
}
function outSubBadge() {
    var subBadge = this;
    var tooltip = document.getElementById('tooltip');
    tooltip.style.display = 'none';
}

function overCheckbox() {
	var checkbox = this;
	classAdd(checkbox, 'hover');
	document.body.style.cursor = 'pointer';
}
function outCheckbox() {
	var checkbox = this;
	classRemove(checkbox, 'hover');
	document.body.style.cursor = 'default';
}
function checkParentBadge(subBadge) {
    var parentBadge = subBadge.parent;
    var cnt = 0;
    var badge = parentBadge.childNodes[1];
    for (var i = 0; i < badge.childNodes.length - 1; ++i) {
        // not selected
        if (badge.childNodes[i].className.indexOf('selected') != -1) {
            ++cnt;
        }
    }
    if (cnt == badge.childNodes.length - 1) {
        classAdd(parentBadge, 'selected');
        classAdd(badge.childNodes[badge.childNodes.length - 1], 'selected');
        parentBadge.childNodes[0].selected = true;
    } else {
        classRemove(parentBadge, 'selected');
        classRemove(badge.childNodes[badge.childNodes.length - 1], 'selected');
        parentBadge.childNodes[0].selected = false;
    }
    var edited = false;
    for (var i = 0; i < badge.childNodes.length - 1; ++i) {
        if (badge.childNodes[i].edited) {
            edited = true;
        }
    }
    if (edited) {
        classAdd(parentBadge, 'edited');
    } else {
        classRemove(parentBadge, 'edited');
    }
}
function addSubCheck(parentBadge) {
    if (parentBadge.editable) {
        var badgeChecks = parentBadge.wrapper.childNodes[1];
        for (var i = 0; i < badgeChecks.childNodes.length - 1; ++i) {
            if (!classIncludes(badgeChecks.childNodes[i], 'selected')) {
                badgeChecks.childNodes[i].onmousedown();
            }
        }
        classAdd(badgeChecks.childNodes[badgeChecks.childNodes.length - 1], 'selected');
        var edited = false;
        for (var i = 0; i < badgeChecks.childNodes.length - 1; ++i) {
            if (badgeChecks.childNodes[i].edited) {
                edited = true;
            }
        }
        if (edited) {
            classAdd(parentBadge.wrapper, 'edited');
        } else {
            classRemove(parentBadge.wrapper, 'edited');
        }
    }
}
function removeSubCheck(parentBadge) {
    if (parentBadge.editable) {
        var badgeChecks = parentBadge.wrapper.childNodes[1];
        for (var i = 0; i < badgeChecks.childNodes.length - 1; ++i) {
            if (classIncludes(badgeChecks.childNodes[i], 'selected')) {
                badgeChecks.childNodes[i].onmousedown();
            }
        }
        classRemove(badgeChecks.childNodes[badgeChecks.childNodes.length - 1], 'selected');
        var edited = false;
        for (var i = 0; i < badgeChecks.childNodes.length - 1; ++i) {
            if (badgeChecks.childNodes[i].edited) {
                edited = true;
            }
        }
        if (edited) {
            classAdd(parentBadge.wrapper, 'edited');
        } else {
            classRemove(parentBadge.wrapper, 'edited');
        }
    }
}

function downSubBadge() {
    this.onmouseout();
    var addBadges = global.addBadges;
	var removeBadges = global.removeBadges;
    var subBadge = this;
    var group = subBadge.badgeRecord.parent.childNodes[1];
    var name = subBadge.badgeRecord.name;

    if(subBadge.badgeRecord.disabled == true) {
        return;
    }

    // if the badge is a group subbadge
    if (subBadge == group.childNodes[group.childNodes.length - 1]) {
        subBadge.badgeRecord.parent.childNodes[0].onmousedown();
        return;
    }
    var hasLevel = $(this).hasClass('level');
    var isAdd = false;
    
    if (!subBadge.edited) {
        subBadge.edited = true;
        if (classIncludes(this, 'selected')) {
            classRemove(this, 'selected');
            removeBadges.push(subBadge.badgeRecord);
        } else {
            classAdd(this, 'selected');
            addBadges.push(subBadge.badgeRecord);
            isAdd = true;
        }
    }
    else {
        subBadge.edited = false;
        if (classIncludes(this, 'selected')) {
            classRemove(this, 'selected');
            for (var i = 0; i < addBadges.length; i++)
                if (addBadges[i].name == name) {
                    addBadges.splice(i, 1);
                    break;
                }
        }
        else {
            classAdd(this, 'selected');
            for (var i = 0; i < removeBadges.length; i++)
                if (removeBadges[i].name == name) {
                    removeBadges.splice(i, 1);
                    break;
                }
            isAdd = true;
        }
    }

    if(hasLevel) {
        // level badges
        var spanIndex = $(this).parent().find("span").index(this);
        $(this).parent().find("span").each(function(index) {
            if(isAdd) {
                // this badge is light on, all the previous badge which is not on should be set on
                if(index < spanIndex && !$(this).hasClass('selected')) {
                    $(this).mousedown();
                }
            } else {
                // this badge is turned off, all the following badges should be turned off
                if(index > spanIndex && $(this).hasClass('selected')) {
                    $(this).mousedown();
                }
            }
        })
    }

    checkParentBadge(this.badgeRecord);    
    
    var commitButton = document.getElementById('commitButton');
	if (addBadges.length + removeBadges.length > 0) {
		commitButton.style.visibility = 'visible';
    } else {
		commitButton.style.visibility = 'hidden';
    }
}


function downCheckbox() {
	var checkbox = this;
	var badgeRecord = checkbox.badgeRecord;
	var wrapper = badgeRecord.wrapper;
	var name = badgeRecord.name;
	var addBadges = global.addBadges;
	var removeBadges = global.removeBadges;
    var isParentBadge = badgeRecord.isParentBadge;
    var badge = badgeRecord.badge;
	if (!checkbox.selected) {
		classAdd(wrapper, 'selected');
        if (isParentBadge) {
            addSubCheck(badgeRecord);
        }
		checkbox.selected = true;
	}
	else {
		classRemove(wrapper, 'selected');
		if (isParentBadge) {
            removeSubCheck(badgeRecord);
        }
		checkbox.selected = false;
	}
	if (!isParentBadge) {
        if (!checkbox.edited) {
            checkbox.edited = true;
            if (!checkbox.selected) {
                classAdd(wrapper, 'editRemove');
                removeBadges.push(badgeRecord);
            }
            else {
                classAdd(wrapper, 'editAdd');
                addBadges.push(badgeRecord);
            }
        }
        else {
            checkbox.edited = false;
            if (!checkbox.selected) {
                classRemove(wrapper, 'editAdd');
                for (var i = 0; i < addBadges.length; i++)
                    if (addBadges[i].name == name) {
                        addBadges.splice(i, 1);
                        break;
                    }
            }
            else {
                classRemove(wrapper, 'editRemove');
                for (var i = 0; i < removeBadges.length; i++)
                    if (removeBadges[i].name == name) {
                        removeBadges.splice(i, 1);
                        break;
                    }
            }
        }
	}
	var commitButton = document.getElementById('commitButton');
	if (addBadges.length + removeBadges.length > 0)
		commitButton.style.visibility = 'visible';
	else
		commitButton.style.visibility = 'hidden';
}

function classIncludes(element, seekName) {
	var names = element.className.split(' ');
	for (var i = 0; i < names.length; i++)
		if (names[i] == seekName)
			return true;
	return false;
}
function classAdd(element, plusName) {
	if (classIncludes(element, plusName))
		return;
	if (element.className == '')
		element.className = plusName;
	else
		element.className += ' '+plusName;
}
function classRemove(element, minusName) {
    if (!element) {
        return;
    }
	var oldNames = element.className.split(' ');
	var newNames = [];
	for (var i = 0; i < oldNames.length; i++) {
		var name = oldNames[i];
		if (name == '' || name == minusName)
			continue;
		newNames.push(name);
	}
	element.className = newNames.join(' ');
}

function stripBlanks(s) {
	var startPos = 0;
	while (s.charAt(startPos) == ' ')
		startPos++;
	var endPos = s.length-1;
	while (s.charAt(endPos) == ' ')
		endPos--;
	if (startPos >= endPos)
		return '';
	return s.substring(startPos, endPos+1);
}

function getBadges() {
	var handle = $("#handleDisplay").text();
	
	var badgeEditor = document.getElementById('badgeEditor');
	badgeEditor.style.display = 'block';
	global.editHandle = handle;
	refreshBadges();
}

function refreshBadges() {
	var handle = global.currentMember.handle;
	var badges = global.badges;
	var badgeNames = global.currentMember.badges;
	for (var i = 0; i < badgeNames.length; i++) {
		var name = badgeNames[i];
		var badge = badges[name];
		var wrapper = badge.wrapper;
		if (badge.isSubBadge) {
            classAdd(badge.badge, 'selected');
            checkParentBadge(badge);
		} else {
            classAdd(wrapper, 'selected');
            var checkbox = badge.checkbox;
            checkbox.selected = true;
        }
    }
	global.addBadges = [];
	global.removeBadges = [];
}

function commitChanges() {
	var addBadges = global.addBadges;
	var removeBadges = global.removeBadges;
	
	if(addBadges.length > 0) {
		for(var i=0; i<addBadges.length; i++) {
			var name = addBadges[i].name;
			var ruleId = getBadgeId(name);
			if(ruleId > 0) {
				var node = $("<input type='hidden' value='" + ruleId + "' name='ruleId'></input>");
				$("#BadgeForm").append(node);
			}
		}
	}
	
	if(removeBadges.length > 0) {
		for(var i=0; i<removeBadges.length; i++) {
			var name = removeBadges[i].name;
			var ruleId = getBadgeId(name);
			if(ruleId>0) {
				$(".hiddenData .badge").each(function(){
					if($(this).val() == ruleId.toString()) {
						$(this).remove();
					}
				});
			}
		}
	}
	
	if(addBadges.length + removeBadges.length > 0) {
		$("#BadgeForm").submit();
	}
}

function leaveEditor() {
	if (global.addBadges.length + global.removeBadges.length > 0) {
		if (!window.confirm('Leave without saving changes?'))
			return;
	}
	goToHandleSearchPage();
}
/**
 * This method would redirect user to Badge Search Handle page.
 */
function goToHandleSearchPage () {
	var basePath = $("#basePath").val();
	window.location = basePath + "?module=BadgeAdminHome"
}

/**
 * This method would transform data from backend to json format, which would then be displayed.
 */
function initializeData() {
	var handle = $("#handleDisplay").text();
	var badges = [];
	global.currentMember = {handle: handle, badges:badges};
	var currentMember = global.currentMember;
	
	$(".hiddenData .badge").each(function(){
		var ruleId = $(this).val();
		var type = $(this).attr("alt");
		var name = $(this).attr("id");
		var badge = mapBadge(ruleId);
		badges.push(badge);
	});	
}

/**
 * The the id of the rule the badge corresponds to.
 * @param {} name the badge name
 * @return {Number} the rule ID.
 */ 
function getBadgeId(name) {
	for(var i=1; i<140; i++) {
		if(mapBadge(i.toString()) == name) {
			return i;
		}
	}
	return -1;
}

/**
 * This method maps the relationship between achievement rule id and it representation in UI.
 * @param {} id Achievement Rule ID.
 * @return {String} Representation of this rule in UI.
 */
function mapBadge(id) {
	switch(id) {
		case "1":
			return 'forum posts: 1';
		case "2":
			return 'forum posts: 100';
		case "3":
			return 'forum posts: 500';
		case "4":
			return 'forum posts: 1000';
		case "5":
			return 'forum posts: 5000';
		case "6": 
			return 'passing submissions: 1';
		case "7":
			return 'passing submissions: 50';
		case "8":
			return 'passing submissions: 100';
		case "9":
			return 'passing submissions: 250';
		case "10":
			return 'passing submissions: 500';
		case "11":
			return 'checkpoint prizes: 1';
		case "12":
			return 'checkpoint prizes: 50';
		case "13":
			return 'checkpoint prizes: 100';
		case "14":
			return 'checkpoint prizes: 250';
		case "15":
			return 'checkpoint prizes: 500';
		case "16":
			return 'winning placements: 1';
		case "17":
			return 'winning placements: 25';
		case "18":
			return 'winning placements: 50';
		case "19":
			return 'winning placements: 100';
		case "20":
			return 'winning placements: 250';
		case "21":
			return 'first-place wins: 1';
		case "22":
			return 'first-place wins: 25';
		case "23":
			return 'first-place wins: 50';
		case "24":
			return 'first-place wins: 100';
		case "25":
			return 'first-place wins: 250';
		case "26":
			return 'studio forum posts: 1';
		case "27":
			return 'studio forum posts: 100';
		case "28":
			return 'studio forum posts: 500';
		case "29":
			return 'studio forum posts: 1000';
		case "30":
			return 'studio forum posts: 5000';
		case "31": 
			return 'studio passing submissions: 1';
		case "32":
			return 'studio passing submissions: 50';
		case "33":
			return 'studio passing submissions: 100';
		case "34":
			return 'studio passing submissions: 250';
		case "35":
			return 'studio passing submissions: 500';
		case "36":
			return 'studio checkpoint prizes: 1';
		case "37":
			return 'studio checkpoint prizes: 50';
		case "38":
			return 'studio checkpoint prizes: 100';
		case "39":
			return 'studio checkpoint prizes: 250';
		case "40":
			return 'studio checkpoint prizes: 500';
		case "41":
			return 'studio winning placements: 1';
		case "42":
			return 'studio winning placements: 25';
		case "43":
			return 'studio winning placements: 50';
		case "44":
			return 'studio winning placements: 100';
		case "45":
			return 'studio winning placements: 250';
		case "46":
			return 'studio first-place wins: 1';
		case "47":
			return 'studio first-place wins: 25';
		case "48":
			return 'studio first-place wins: 50';
		case "49":
			return 'studio first-place wins: 100';
		case "50":
			return 'studio first-place wins: 250';
		case "51":
			return 'Digital Run winner';
		case "52":
			return 'Digital Run top 5';
		case "53":
			return 'Studio Cup winner';
		case "54":
			return 'Studio Cup top 5';
		case "55":
			return 'wireframe';
		case "56":
			return 'desktop app UI';
		case "57":
			return 'mobile UI';
		case "58":
			return 'web UI';
		case "59":
			return 'branding/marketing/presentation';
		case "60":
			return 'UI development';
		case "61":
			return 'architecture and design';
		case "62":
			return 'component development';
		case "63":
			return 'assembly';
		case "64":
			return 'idea generation';
		case "65":
			return 'conceptualization';
		case "66":
			return 'test scenarios';
		case "67":
			return 'bug hunts';
		case "68":
			return 'big data';
		case "69":
			return 'TCO on-site competitor';
		case "70":
			return 'TCO finalist';
		case "71":
			return 'TCO champion';
		case "72":
			return 'Member of the month';
		case "73":
			return 'TopCoder event trip winner';
		case "74":
			return 'TCO on-site competitor';
		case "75":
			return 'TCO finalist';
		case "76":
			return 'TCO champion';
		case "77":
			return 'Member of the month';
		case "78":
			return 'TopCoder event trip winner';
		case "79":
			return 'TCCC on-site competitor';
		case "80":
			return 'TCCC finalist';
		case "81":
			return 'TCCC champion';
		case "82":
			return 'Studio spec reviewer';
		case "83":
			return 'Studio screener';
		case "84":
			return 'TopCoder reviewer';
		case "85":
			return 'Studio spirit';
		case "86":
			return 'Studio mentor';
		case "87":
			return 'TopCoder spirit';
		case "88":
			return 'TopCoder mentor';
        case "130":
            return 'Getting Started';
        case "131":
            return 'Novice';
        case "132":
            return 'Journeyman';
        case "133":
            return 'Expert';
        case "134":
            return 'Master';
        case "135":
            return 'Grand Master';
        case "136":
            return 'Paragon';
        case "137":
            return 'Grand Paragon';
        case "138":
            return 'Social Evangelist';
	}
}

function prepTool() {
	prepBadges();
	initializeData();
	getBadges();
}



$(document).ready(function(){
	prepTool();
});