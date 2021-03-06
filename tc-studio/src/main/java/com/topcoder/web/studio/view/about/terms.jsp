<%@ taglib uri="studio.tld" prefix="studio" %>
<%@ page contentType="text/html;charset=utf-8" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">

<html>
<head>
    <link type="image/x-icon" rel="shortcut icon" href="/i/favicon.ico" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>TopCoder Studio</title>

    <jsp:include page="../style.jsp">
        <jsp:param name="key" value="tc_studio"/>
    </jsp:include>
    
    <script src="/js/NewStyleHeaderFooter/jquery-1.2.6.min.js" type="text/javascript"></script>
    <script src="/js/NewStyleHeaderFooter/preloadCssImages.jQuery_v5.js" language="javascript"></script>
    <script type="text/javascript">
            $(document).ready(function(){
                //Run the script to preload images from CSS
                $.preloadCssImages(); 
            });
    </script>
    <script src="/js/NewStyleHeaderFooter/jquery.hoverIntent.minified.js" type="text/javascript"></script>
    <script src="/js/NewStyleHeaderFooter/scripts.js" type="text/javascript"></script>
    <script type="text/javascript" language="javascript">

    $(document).ready(function(){
    
    
        $("#nav ul li").hoverIntent(function(){
            $(this).children("ul").slideDown("fast");
        }, function() {
            $(this).children("ul").slideUp("fast");
        });
        
        $("#nav ul ul li").hover(function() {
            $(this).parents("#nav ul li").children('a').addClass("active-item");
        }, function() {
            $(this).parents("#nav ul li").children('a').removeClass("active-item");
        });
    
    
    });
    </script>
</head>

<body>
    <div id="page-wrap">
        <div align="center">
            <jsp:include page="../top.jsp">
                <jsp:param name="section" value="howitworks" />
            </jsp:include>
        <br />
        <!-- container -->
        <div id="container">
            <div id="wrapper">
            <!-- content -->
            <div id="content">
                <div class="contentTop">
                    <div class="contentMiddle">

                <h1>Terms & Conditions of Use at TopCoder</h1>
                <h2>Acceptance of Terms and Conditions</h2>
                By using this Web site you are indicating your agreement to these Terms and Conditions of Use ("Terms of Use").  If you do not agree to these Terms of Use, please do not use the Web site and exit now.
                <br /><br />
                Throughout these Terms of Use, the words "we," "us," "our," and TopCoder refer to TopCoder and its parent, subsidiaries, and affiliates collectively.
                <br /><br />
                We may revise these Terms of Use at any time without prior notice by updating this page and such revisions will be effective upon posting to this page.  Please check this page periodically for any changes.  Your continued use of this Web site following the posting of any revisions to these Terms of Use will mean you accept those changes.  We reserve the right to alter, suspend or discontinue any aspect of www.topcoder.com, including your access to it.  Unless explicitly stated, any new features will be subject to these Terms of Use.
                <br /><br />
                <h2>Privacy</h2>
                See our complete <a href="${sessionInfo.servletPath}?module=Static&d1=about&d2=privacy">privacy policy</a>.
                <br /><br />
                <h2>Provisions Applicable to Chinese Citizens and Expatriates Residing in China</h2>
                TopCoder hereby incorporates into these Terms of Use and Privacy Policy the provisions of China's Decision on Safeguarding the Security of the Internet (the "Decision").
                <br /><br />
                According to Section 1 of the Decision "to ensure operational security of the Internet, the person or organization perpetrating any of the following acts in violation of the criminal law shall be penalized according to the criminal code:
                <ol>
                <li>Unauthorized penetration into the computer and information system of the state affair, national defense or high-tech departments of the state;</li>
                <li>Intentional composition or dissemination of computer virus or other destructive programs, or attacking the computer system or telecommunication network and resulting in damage or destruction of such computer systems or telecommunication network;</li>
                <li>Unauthorized disruption of operation of the computer network or telecommunication service and resulting in malfunction of such network or telecommunication systems in violation of the laws or regulations of the state."</li>
                </ol>
                According to Section 2 of the Decision, "to protect national security and social stability, the person or organization perpetrating any of the following acts in violation of the criminal law shall be penalized according to the criminal code:
                <ol>
                <li>Disseminating rumor or slander on the Internet, or publishing or diffusing maleficent information to instigate subversion of the state power or socialist system, advocate abruption of the country or harm unity of the country;</li>
                <li>Stealing or disclosing the national or military secrets on the Internet;</li>
                <li>Instigating inter-ethnic enmity or prejudice, or disrupting ethnic unity on the Internet; and</li>
                <li>Establishing or organizing heresies on the Internet and impeding the implementation of laws and regulations of the state."</li>
                </ol>
                Section 3 of the Decision also stipulates that "to safeguard the order of the socialist market economy and social stability, the person or organization perpetrating any of the following acts in violation of the criminal law shall be penalized according to the criminal code:
                <ol>
                <li>Selling fake or shoddy goods on the Internet or making false or misleading propaganda of commodities on the Internet;</li>
                <li>Hurting others' commercial fame or reputation of products on the Internet;</li>
                <li>Infringing upon others' intellectual property rights on the Internet;</li>
                <li>Compiling and distributing false information on the Internet to affect securities or futures transactions or disrupt order of the financial markets; and</li>
                <li>Establishing pornographic web sites or web pages, providing links to pornographic web sites, or disseminating pornographic magazines, films, audio and videos materials or graphics on the Internet."</li>
                </ol>
                Section 4 of the Decision stipulates that "to protect the legal rights of personal safety and property of individuals, legal persons and other organizations, the person or organization perpetrating any of the following acts in violation of the criminal law shall be penalized according to the criminal code:
                <ol>
                <li>Insulting others or drawing up slanders against others on the Internet;</li>
                <li>Illegally intercepting, modifying or deleting others' emails or other database materials and infringing rights of the citizen of freedom and secrets in communicating and letter transmitting; and</li>
                <li>Perpetrating theft, fraud, or blackmailing on the Internet."</li>
                </ol>
                <h2>Copyright, Trademark and Other Intellectual Property</h2>
                <strong>Protection</strong><br />
                Except as otherwise indicated, this Web site and its entire contents (including, but not limited to, the text, photographs, information, software, graphics, images, sound, and animation) are owned by us and are protected by domestic and international copyright, trademark, patent, and other intellectual property laws.  All copyrightable text and graphics, the selection, arrangement, and presentation of all materials (including information in the public domain), and the overall design of this Web site are &copy;2007 TopCoder.  All rights reserved.  We hereby give you permission to download and print materials from this Web site for the sole purposes of viewing, reading, and retaining for reference the materials for non-commercial use.  Any other copying, distribution, retransmission, or modification of information or materials on this Web site, whether in electronic or other form, without our express prior written permission is strictly prohibited.  You further agree that you will not disassemble, decompile, reverse engineer or otherwise modify the material on this Web site.  Any unauthorized or prohibited use may subject the offender to civil liability and criminal prosecution under applicable laws.
                <br /><br />
                <strong>Notice</strong><br />
                All trademarks, service marks, and trade names are proprietary to us or other respective owners that have granted us the right and license to use their marks.
                <br /><br />
                <strong>Copyright Complaints</strong><br />
                We respect the intellectual property of others, and we ask you to do the same.  We may, in appropriate circumstances and at our sole discretion, terminate the access of users who infringe the copyright rights of others.
                <br /><br />
                If you believe that your work has been copied and is accessible at our Web site in a way that constitutes copyright infringement, or that our Web site contains links or other references to another online location that contains material or activity that infringes your copyright rights, you may notify us by providing our copyright agent the information required by the U.S. Online Copyright Infringement Liability Limitation Act of the U.S. Digital Millennium Copyright Act, 17 U.S.C. 512.  Our agent for notice of claims of copyright infringement on or regarding this Web site can be reached as follows:
                <br /><br />
                <table cellspacing="0" cellpadding="3" border="0">
                   <tr valign="top"><td nowrap="nowrap">BY E-MAIL:</td><td width="100%"><a href="mailto:service@topcoder.com">service@topcoder.com</a></td></tr>
                   <tr valign="top"><td nowrap="nowrap">BY MAIL:</td><td>John Hughes c/o Tanya Horgan<br />
                      TopCoder, Inc.<br />
                      95 Glastonbury Blvd,<br />
                      Glastonbury, CT  06033
                   <tr valign="top"><td nowrap="nowrap">BY PHONE:</td><td>860.633.5540</td></tr>
                </table>
                <br /><br />
                Repeat infringers will be blocked from accessing the TopCoder Web site.
                <br /><br />
                <h2>Indemnification and Release</h2>
                By accessing our Web site, you agree to indemnify us and any parent, subsidiary, sponsor or affiliated entities, our officers and employees, and officers and employees of any parent, subsidiary, sponsor or affiliated entities and hold them harmless from any and all claims and expenses, including attorney's fees, arising from your use of our Web site including any material (including third-party material) that you post on our Web site and any services or products available through our Web site.  In addition, you hereby release us and any parent, subsidiary, sponsor or affiliated entities, our officers and employees, and officers and employees of any parent, subsidiary, sponsor or affiliated entities from any and all claims, demands, debts, obligations, damages (actual or consequential), costs, and expenses of any kind or nature whatsoever, whether known or unknown, suspected or unsuspected, disclosed or undisclosed, that you may have against them arising out of or in any way related to such disputes and/or to any services or products available at our Web site.  You hereby agree to waive all laws that may limit the efficacy of such releases.
                <br /><br />
                <h2>Disclaimer</h2>
                THE MATERIALS AND SERVICES ON OUR WEB SITE ARE PROVIDED "AS IS" AND WITHOUT WARRANTIES OF ANY KIND EITHER EXPRESS OR IMPLIED.  TO THE FULLEST EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.  WE DO NOT WARRANT THAT THE FUNCTIONS CONTAINED IN THE MATERIALS WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THIS WEB SITE OR THE SERVER(S) THAT MAKES OUR WEB SITE AVAILABLE OR ANY ADVERTISED OR HYPERLINKED SITE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS OR THAT OUR SITE, SERVER(S), ADVERTISED OR HYPERLINKED SITES WILL BE ACCESSIBLE AT ALL TIMES.  WE DO NOT WARRANT THAT SUCH ERRORS, DEFECTS OR INTERRUPTIONS IN SERVICE WILL NOT AFFECT THE RESULTS OF OUR COMPETITIONS, AND WE DISCLAIM ANY RESPONSIBILITY FOR REDUCED PERFORMANCE IN COMPETITIONS DUE TO SUCH PROBLEMS.  WE DO NOT WARRANT OR MAKE ANY REPRESENTATIONS REGARDING THE USE OR THE RESULTS OF OUR WEB SITE WITH RESPECT TO CORRECTNESS, ACCURACY, RELIABILITY, GRAPHICS, LINKS OR OTHERWISE.  YOU ASSUME THE ENTIRE COST OF ALL NECESSARY SERVICING, REPAIR OR CORRECTION.  TO THE EXTENT THAT APPLICABLE LAW MAY NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES, THE ABOVE EXCLUSIONS MAY NOT APPLY TO YOU.
                <br /><br />
                Documents, graphics and other materials appearing at our Web site may include technical inaccuracies, typographical errors, and out-of-date information and use of such documents, graphics or other materials is at your own risk.
                <br /><br />
                <h2>Limitation of Liability</h2>
                TO THE FULLEST EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW, TOPCODER SHALL NOT BE LIABLE FOR ANY DAMAGES (INCLUDING, BUT NOT LIMITED TO, DIRECT, INDIRECT, INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES), WHETHER BASED ON WARRANTY, CONTRACT, TORT, OR ANY OTHER LEGAL THEORY, INCLUDING, BUT NOT LIMITED TO, DAMAGES FOR LOSS OF WINNINGS, DATA OR OTHER DAMAGE TO ANY OTHER INTANGIBLE PROPERTY, EVEN IF TOPCODER HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, RESULTING FROM (i) THE USE OR INABILITY TO USE THIS WEB SITE, (ii) THE DISCLOSURE OF, UNAUTHORIZED ACCESS TO OR ALTERATION OF ANY TRANSMISSION OR DATA, (iii) THE STATEMENTS OR CONDUCT OF ANY THIRD PARTY OR (iv) ANY OTHER MATTER RELATING TO TOPCODER.
                <br /><br />
                <h2>Links to Other Web Sites and Services</h2>
                To the extent that our Web site contains links to other Web sites and outside services and resources, we do not control the availability and content of those Web sites, services or resources, nor do we necessarily review or endorse materials available at or through such other Web sites.  Viewing other Web sites or utilizing outside services and resources is done at your own risk.  We shall not be liable for any loss or damage caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such site or resource.
                <br /><br />
                <h2>Competitions</h2>
                In addition to these Terms of Use, TopCoder may provide specific Official Rules and Regulations and other documentation for certain activities on this Web site, including without limitation, contests, matches, tournaments or other competitions (collectively "Competitions") conducted by us and those in conjunction with third parties.  These Terms of Use are incorporated by reference into the specific Official Rules and Regulations which appear in connection with information about a particular Competition.  To the extent that any conflict exists between these Terms of Use and any specific Official Rules and Regulations, the Official Rules and Regulations for that Competition in which you choose to participate shall govern.
                <br /><br />
                <h2>Materials Posted by Visitors</h2>
                Except as otherwise specified in the Official Rules and Regulations or other documentation pertaining to a Competition, you retain any rights to ownership in any materials posted, uploaded or otherwise sent to our Web site by you; TopCoder will not gain ownership rights to this material.  By posting, uploading or otherwise sending any source code to us or our Web site, you grant (or warrant that the owner of such rights has expressly granted) us a perpetual, royalty-free, irrevocable, non-exclusive right and license to use, reproduce and publish such code into any form, medium or technology, including the right, at TopCoder's sole discretion, to distribute such code to be published by third parties.
                <br /><br />
                With respect to any other material posted, uploaded or otherwise sent, except as otherwise specified in the Official Rules and Regulations or other documentation pertaining to a Competition, you grant (or warrant that the owner of such rights has expressly granted) us the same license as set forth above, with the additional license to modify, adapt, translate, create derivative works from, and distribute such materials or incorporate such materials into any form, medium or technology, including the right, at TopCoder's sole discretion, to distribute such materials to be published by third parties.
                <br /><br />
                You waive any and all moral rights, including, without limitation, any rights arising under Chapter 7 of the Copyright and Related Rights Act 2000 applicable to European Union residents, and all rights of a similar nature in any jurisdiction in any material, including source code, which you post, upload or otherwise send to TopCoder or it's Web site, such waivers being in favor of TopCoder.
                <br /><br />
                You are also prohibited from posting or otherwise uploading to our Web site:  any material that infringes on any copyright, trademark or other proprietary rights of another (including publicity and privacy rights); material that is obscene, offensive, libelous, pornographic, threatening, abusive, contains illegal content, or is otherwise objectionable, that would constitute or encourage a criminal offense, or that would otherwise give rise to liability or violates any law.  You also represent that you have all necessary rights to use any material that you post or otherwise upload to our Web site.
                <br /><br />
                You are further forbidden from distributing or otherwise publishing any material on our Web site that contains any solicitation of funds, promotion, employment, advertising, or solicitation for goods or services; sending unsolicited commercial e-mail and other advertising, promotional materials or other forms of solicitation to other users of this site; harvesting names and e-mail addresses from other users of this site without their permission; soliciting passwords from other users; impersonating other users; or sending viruses or other destructive or expropriating content.
                <br /><br />
                We reserve the right to remove any postings or other uploaded materials in response to complaints of infringement, obscenity or defamation or to otherwise review or edit such materials as appropriate, in our sole discretion and without notice.
                <br /><br />
                <h2>Other Restrictions on Conduct</h2>
                You are allowed to register with our Web site only once and you must provide true and accurate registration information.  You are prohibited from misrepresenting your registration information or tampering with the registration process.
                <br /><br />
                You agree not to disrupt, modify or interfere with the functioning of our Web site or any services provided on or through our Web site or with any associated software, hardware or servers in any way and you agree not to impede or interfere with others' use of our Web site.  This includes your agreement that you will not cheat; that the idea for the code and/or challenge(s) submitted by you is yours alone.  This also includes your agreement that you will not provide your TopCoder information including, but not limited to, your TopCoder handle and rating, to any third party for the purpose of pursuing employment opportunities without the written consent of TopCoder.  If you are contacted by a third-party regarding employment opportunities and/or media interest as a result in your participation in TopCoder Competitions, you agree to promptly notify TopCoder of such contact.  You also agree not to alter or tamper with any information or materials on, or associated with our Web site or services provided on or through our Web site.
                <br /><br />
                We do not necessarily endorse, support, sanction, encourage, verify or agree with the comments, opinions, or other statements made public at our Web site by users through our Competitions, forums or other interactive services available at our Web site.  Any information or material sent by users to any forums, including advice and opinions, represents the views and is the responsibility of those users and does not necessarily represent our views.
                <br /><br />
                You agree that no impediment exists to you joining the TopCoder Web site, and your participation in TopCoder's Web site and the Competitions it offers will not interfere with your performance of any other agreement or obligation which has been or will be made with any third party.
                <br /><br />
                <h2>Choice of Law and Forum</h2>
                These Terms of Use are governed by the laws of the Commonwealth of Massachusetts.  You hereby agree to submit to the exclusive jurisdiction of the courts of the Commonwealth of Massachusetts.  To the extent that applicable laws have mandatory application to this agreement or give you the right to bring action in any other courts, the above limitations may not apply to you.  Use of this Web site is unauthorized in any jurisdiction that does not give full effect to all provisions of these Terms of Use.
                <br /><br />
                <h2>Severability and Enforceability</h2>
                If any provision or portion of these Terms of Use is held illegal, invalid, or unenforceable, in whole or in part, it shall be modified to the minimum extent necessary to correct any deficiencies or replaced with a provision which is as close as is legally permissible to the provision found invalid or unenforceable and shall not affect the legality, validity or enforceability of any other provisions or portions of these Terms of Use.
                <br /><br />
                <h2>Termination/Exclusion</h2>
                We reserve the right, in our sole discretion, to revoke any and all privileges associated with accessing and/or competing on our Web site, and to take any other action we deem appropriate including but not limited to terminating or suspending your use of www.topcoder.com, for no reason or any reason whatsoever, including improper use of this Web site or failure to comply with these Terms of Use.
                <br /><br />
                <h2>General</h2>
                Our Web site is not intended for use by children under the age of 13, and children under the age of 13 are not eligible to participate in any Competitions.
                <br /><br />
                We may assign, novate or subcontract any or all of our rights and obligations under these Terms of Use at any time.
                <br /><br />
                If you have any questions regarding these Terms of Use, contact us at <a href="mailto:service@topcoder.com">service@topcoder.com</a>.

                        <br clear="all"/>
                    </div>                
                    <div class="contentBottom"></div>
                </div>
            </div>
        </div>

        <jsp:include page="../foot.jsp"/>


</body>
</html>
