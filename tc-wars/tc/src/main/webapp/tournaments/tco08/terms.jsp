<%@ page import="com.topcoder.web.common.BaseProcessor" %>
<%@ page import="com.topcoder.web.common.model.Event,
                 com.topcoder.web.common.tag.AnswerInput,
                 com.topcoder.web.tc.Constants,
                 com.topcoder.web.tc.controller.request.tournament.RegistrationBase,
                 java.util.ArrayList" %>
<%@ page import="java.util.HashMap,
                 java.util.List" %>
<%@ page contentType="text/html;charset=utf-8" %>
<%@ taglib uri="tc-webtags.tld" prefix="tc-webtag" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="tc.tld" prefix="tc" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%
    String eventType = (String) request.getAttribute("et");
    Event event = (Event) request.getAttribute("event");
    List questionInfo = new ArrayList(event.getSurvey().getQuestions());
    HashMap defaults = (HashMap) pageContext.getRequest().getAttribute(BaseProcessor.DEFAULTS_KEY);
%>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>The 2008 TopCoder&reg; Open - Get ready for the Ultimate TopCoder Event!</title>
<link type="image/x-icon" rel="shortcut icon" href="/i/favicon.ico"/>
<link type="text/css" rel="stylesheet" href="/css/tournaments/tco08.css"/>
<link type="text/css" rel="stylesheet" href="/css/coders.css"/>
<script language="JavaScript" type="text/javascript" src="/js/arena.js"></script>
</head>
<body id="page_sub">

<div id="wrapper">

            <jsp:include page="nav.jsp">
                <jsp:param name="tabLev1" value="<%=eventType%>"/>
                <jsp:param name="tabLev2" value="register"/>
                <jsp:param name="tabLev3" value=""/>
            </jsp:include>


                <h2>Registration</h2>

                        <form name="terms" method="post" action="/tco08">
                            <input name="module" value="SubmitRegistration" type="hidden" />
                            <input name="et" value="<%=eventType%>" type="hidden" />

                            <p align="center">To complete your registration for the <%=event.getDescription()%> you must
                                <br /><strong>read and agree to</strong> the terms listed below.</p>

                            <div align="center">
                                <iframe width="600" height="300" marginwidth="5" src="/tc?module=Static&amp;d1=tournaments&amp;d2=tco08&amp;d3=termsContent&<%=Constants.TERMS_OF_USE_ID%>=<%=event.getTerms().getId()%>"></iframe>
                            </div>

                            <div align="center">
                                <tc-webtag:errorIterator id="err" name="<%=Constants.TERMS_AGREE%>">
                                    <span class="bigRed">${err}</span>
                                    &nbsp;<br />
                                </tc-webtag:errorIterator>
                                <tc-webtag:chkBox name="<%=Constants.TERMS_AGREE%>"/>
                                I agree
                            </div>


                            <tc:questionIterator list="<%=questionInfo%>" id="question">
                                <% if (question.getKeyword().equals(RegistrationBase.AGE)) { %>
                                <p align="center">
                                    <span class="bigRed">
                                    <tc-webtag:errorIterator id="err"
                                                             name="<%=AnswerInput.PREFIX+question.getId()%>"><%=err%>
                                        <br />
                                    </tc-webtag:errorIterator>
                                    </span>&nbsp;<br />
                                    <jsp:getProperty name="question" property="text"/>
                                    <input type="text" size="3" maxlength="3" name="<%=AnswerInput.PREFIX + question.getId()%>" id="answerInput" value="<%= defaults.containsKey(AnswerInput.PREFIX + question.getId()) ? defaults.get(AnswerInput.PREFIX + question.getId()) : "" %>"/>
                                </p>
                                <% } else  if (question.getKeyword().equals(RegistrationBase.RESIDENT)) { %>
                                    <p align="center">
                                        <span class="bigRed">
                                        <tc-webtag:errorIterator id="err"
                                                                 name="<%=AnswerInput.PREFIX+question.getId()%>"><%=err%>
                                            <br />
                                        </tc-webtag:errorIterator>
                                        </span>&nbsp;<br />
                                        <jsp:getProperty name="question" property="text"/>
                                        <input type="text" size="3" maxlength="3" name="<%=AnswerInput.PREFIX + question.getId()%>" id="answerInput" value="<%= defaults.containsKey(AnswerInput.PREFIX + question.getId()) ? defaults.get(AnswerInput.PREFIX + question.getId()) : "" %>"/>
                                    </p>
                                <% } else { %>
                                <p align="center">
                                    <span class="bigRed">
                                    <tc-webtag:errorIterator id="err"
                                                             name="<%=AnswerInput.PREFIX+question.getId()%>"><%=err%>
                                        <br />
                                    </tc-webtag:errorIterator>
                                    </span>&nbsp;<br />
                                    <jsp:getProperty name="question" property="text"/>
                                    <br />
                                    <tc:answerInput id="answerInput" question="<%=question%>">
                                        <%=answerInput%>
                                        <%=answerText%>&nbsp;&nbsp;&nbsp;
                                    </tc:answerInput>
                                </p>
                                <% }%>

                            </tc:questionIterator>

                            <div align="center">
                                <button name="submit" value="submit" type="submit">Submit</button>
                            </div>
                        </form>


    </div><%-- #content --%>

<jsp:include page="footer.jsp" />

</div><%-- #wrapper --%>

</body>
</html>
