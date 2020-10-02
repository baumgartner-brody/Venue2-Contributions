export default {
    /* 
        --background-color: #ffffff;
        --button-color: #0078c2;
        --text-color: #ffffff;
        --red-button: rgb(207,39,41);
        --settings-links: #517B94
        --box-shadow: rgba(44, 62, 80, 1)
        --red-button-text: rgb(207,39,41);
    */
    setPalette(root, dark_mode) {
        if (!dark_mode) {
            // Default palette - main (general)
            root.style.setProperty('--main-text-color', '#1d2324');
            root.style.setProperty('--main-background-color', '#ffffff');

            // Settings Palette
            root.style.setProperty('--settings-logout-button', 'rgb(207,39,41);');
            root.style.setProperty('--settings-logout-button-shadow', 'rgba(144, 62, 80, 0.8)');
            root.style.setProperty('--settings-small-div', 'rgba(0, 0, 0, 0.64)');
            root.style.setProperty('--settings-text', '#517B94');

            // Buttons Palette
            root.style.setProperty('--button-primary-blue', '#0078c2');
            root.style.setProperty('--button-hover-blue', '#005183');
            root.style.setProperty('--button-blue-shadow', 'rgba(67, 65, 120, 0.844)');
            root.style.setProperty('--button-grey-shadow', 'rgba(109, 109, 109, 0.644)');
            

            root.style.setProperty('--button-color', '#0078c2');
            root.style.setProperty('--text-color', '#1d2324');
            root.style.setProperty('--dashboard-text-color', '#2C3E50');
            root.style.setProperty('--dashboard-background-color', '#F5F5F5');
          } else  {
            // Dark mode palette - main (general)
            root.style.setProperty('--main-text-color', '#ffffff');
            root.style.setProperty('--main-background-color', '#1d2324');

            // Dark mode palette - settings
            root.style.setProperty('--settings-logout-button', 'rgba(110, 148, 186, 1)');   
            root.style.setProperty('--settings-logout-button-shadow', 'rgba(69, 122, 176, 0.8)');
            root.style.setProperty('--settings-small-div', 'rgba(216, 216, 216, 0.64)');
            root.style.setProperty('--settings-text', '#cccccc');

            // Buttons Palette - lives in venue.core.css
            root.style.setProperty('--button-primary-blue', '#082d45');
            root.style.setProperty('--button-hover-blue', '#06283d');
            root.style.setProperty('--button-blue-shadow', 'rgba(40, 39, 66, 0.844)');
            root.style.setProperty('--button-grey-shadow', 'rgba(109, 109, 109, 0.644)');
    
            root.style.setProperty('--button-color', '#201857');
            root.style.setProperty('--text-color', '#ffffff'); 
            root.style.setProperty('--dashboard-text-color', '#87a7c7');
            root.style.setProperty('--dashboard-background-color', '#636363');
          }
    }
}

/**********************************************************************************
 **********************************************************************************
 **********************************************************************************
 ***                                                                            ***
 ***   VVVV    VVVV   EEEEEEE  NNNNN      NNNN     UUUU     UUUU      EEEEEEE   ***
 ***    VVV    VVV    EEEEEEE  NNNNNN     NNNN     UUUU     UUUU      EEEEEEE   ***
 ***     VV    VV     EEE      NNNNNNN    NNNN     UUUU     UUUU      EEE       ***
 ***      VVVVVV      EEEEE    NNNN  NNN  NNNN     UUUU     UUUU      EEEEE     ***
 ***       VVVV       EEE      NNNN   NNN NNNN      UUUU   UUUU       EEE       ***
 ***        VV        EEEEEEE  NNNN    NNNNNNN       UUUUUUUUU        EEEEEEE   ***
 ***                  EEEEEEE  NNNN       NNNN         UUUUU          EEEEEEE   ***
 ***                                                                            ***
 ***                                Color Palette:                              ***
 ***                                   Default                                  ***
 ***                                                                            ***
 ***                                  GENERAL                                   ***
 ***                                                                            ***
 ***                        Headings and courses: #87a7c7                       ***
 ***                                 NAVY BLUE                                  ***
 ***                            Text color: #000000                             ***
 ***                                   BLACK                                    ***
 ***                           Background: #ffffff                              ***
 ***                                   WHITE                                    ***
 ***                                                                            ***
 ***                                                                            ***
 ***                                 DASHBOARD                                  ***
 ***                          These values live in dashboard                    *** 
 ***                                                                            ***
 ***                    Box shadows: rgba(109, 109, 109, 0.644)                 ***
 ***                              TRANSPARENT GREY                              ***
 ***                              Recent: #999                                  ***
 ***                                   GREY                                     ***
 ***                              Upcoming: #0074d9                             ***
 ***                                   BLUE                                     ***
 ***                                                                            ***
 ***                               SECTIONS                                     ***
 ***                         Live in venue-core.css                             ***
 ***                                                                            ***
 ***                    Uses main body background and color                     ***
 ***                             for section cards                              ***
 ***                                                                            ***
 ***                         Course text and #: #C1EDFF                         ***
 ***                               LIGHT BLUE                                   ***
 ***                       Course box background: #272727                       ***
 ***                   Box this # lives in: rgba(0, 0, 0, 0.86)                 ***
 ***                            BLACK (transparent)                             ***
 ***                          Sync border: #04852f                              ***
 ***                                   GREEN                                    ***
 ***                           Async border: #683eca                            ***
 ***                                   PURPLE                                   ***
 ***                                                                            ***
 ***                                                                            ***
 ***                               RAINBOW                                      ***
 ***              Red: #d13e34, Transparent: rgba(249, 82, 71, 0.3)             ***
 ***            Orange: #b95726 Transparent: rgba(244, 159, 50, 0.4)            ***
 ***            Green: #04852f Transparent: rgba(78, 205, 76, 0.3)              ***
 ***             Blue: #0078c2 Transparent: rgba(79, 109, 234, 0.3)             ***
 ***                                                                            ***
 ***                                                                            ***
 ***                               LECTURES                                     ***
 ***                      Contains the name, date and %                         ***
 ***                                                                            ***
 ***                     Box shadow: rgba(109, 109, 109, 0.644)                 ***
 ***                            TRANSPARENT GREY                                ***
 ***                 Synchronous: #04852f and rgba(65, 162, 91, 0.33)           ***
 ***                                GREEN                                       ***
 ***             Attendance medium: #b95726 and rgba(233, 126, 71, 0.36)        ***
 ***                                ORANGE                                      ***
 ***                 Attendance bad: #d13e34 and rgba(255, 99, 88, 0.36)        ***
 ***                                  RED                                       ***
 ***               Light grey will be used for unselected boxes                 ***
 ***               Custom Scollbar: #F5F5F5 and rgba(0, 0, 0, 0.1)              ***
 ***                           VERY LIGHT GREY                                  ***
 ***                                                                            ***
 ***                                                                            ***
 ***                                                                            ***
 ***                               BUTTONS                                      ***
 ***                                                                            ***
 ***              BLUE Primary: #0078c2 rgba(109, 109, 109, 0.644)              ***
 ***            GREY  Secondary: #727272 rgba(109, 109, 109, 0.644)             ***
 ***            NAVY Button Hover: #005183 rgba(109, 109, 109, 0.644)           ***
 ***          DARK GREY Secondary Hover: #444444 rgba(109, 109, 109, 0.644)     ***
 ***                                                                            ***
 ***                                MODAL                                       ***
 ***                     NEAR WHITE Input: #f7f7f7                              ***
 ***              TRANSPARENT WHITE: rgba(255, 255, 255, 0.65)                  ***
 ***                            GRAY: Border                                    ***
 ***                                                                            ***
 ***                                                                            ***
 ***                               SETTINGS                                     ***
 ***                                                                            ***
 ***                  Logout Button: rgb(207,39,41)  (red)                      ***
 ***                Logout btn Shadow:  rgba(144, 62, 80, 1) (dark red)         ***
 ***            Switch unticked: #f55442 Ticked: #42f593 Circle: #ffffff        ***
 ***            Name and heading color: #517B94 (light-ish blue)                ***
 ***                                                                            ***
 ***                         DROPDOWN MENU LIVES IN                             ***
 ***                                NavBar.vue                                  ***
 ***                                                                            ***
 ***                                                                            ***
 ********************************************************************************** 
 **********************************************************************************
 **********************************************************************************          

 */