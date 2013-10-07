var Modal = {

  createModal: function(insertedData, titleText, isError){
    var modalWrap = $("<div id='modal_wrap'></div>"),
        modalTitle = $("<span id='modal_title'></span>"),
        modalHeader = $("<div id='modal_header' class='dark_silver_gray_gradient'></div>"),
        modalCloseLink = $("<div id='close_modal_link' class='button small_close_button'>X</div>"),
        modalContent = $("<div id='modal_content'></div>");
        
        if (isError === true) {
          modalWrap.addClass('error_modal');
          modalHeader.removeClass('dark_silver_gray_gradient').addClass('error_gradient');
        }

        if (titleText != undefined) {
          modalTitle.text(titleText);
          modalHeader.prepend(modalTitle);
        }
        modalContent.append(insertedData);
        modalHeader.append(modalCloseLink);
        modalWrap.append(modalHeader).append(modalContent);
        return modalWrap;
  },

  loadValidationModal: function (message) {
    if (typeof message === 'object') {
      Modal.loadModal(message.map(function(message) {
        return "<p>" + message + "</p>";
      }).join(''), "Fields Required", true);
    } else {
      Modal.loadModal(message, "Fields Required", true);
    }
  },

  confirmDelete: function(message, callback) {
    var confirmMessage = (message ? message : "Are you sure you want to delete?"),
        confirmContent = Modal.confirmModalContent(confirmMessage),
        modal = Modal.loadModal(confirmContent, "Confirm Delete");

    Modal.activateConfirm(callback);
  },

  confirmAssignmentLock: function(message, callback, context) {
    var confirmContent = Modal.confirmModalContent(message),
        modal = Modal.loadModal(confirmContent, "Confirm Assignment");

    Modal.activateConfirm(callback, context);
  },  

  confirmModalContent: function(message) {
    var confirmWrap = $("<div id='confirm_wrap'></div>"),
        confirmMessage = $("<div id='confirm_message'></div>"),
        confirmOkButton = $("<span id='confirm_ok' class='button green_button'>Ok</span>"),
        confirmCancelButton = $("<span id='confirm_cancel' class='button red_button'>Cancel</span>");

        confirmMessage.text(message);
        confirmWrap.append(confirmMessage).append(confirmOkButton).append(confirmCancelButton);

        return confirmWrap;
  },

  activateConfirm: function(callback, context) {
    var modal = $("#modal_wrap"),
        okButton = $("#confirm_ok"),
        cancelButton = $("#confirm_cancel");

    okButton.on("click", function() {
      modal.remove();
      if (context != null) {
        callback(context);
      } else {
        callback();
      }
    });
    cancelButton.on("click", function() {
      modal.remove();
      return false;
    });
  },

  loadModal: function(insertedData, titleText, isError) {
    var modal = Modal.createModal(insertedData, titleText, isError);
        
    Modal.removeModal();    
    $('body').append(modal);
    Modal.closeModal();
    Modal.dragModal();
  },

  dragModal: function() {
    var modal = $("#modal_wrap"),
        modalHeader = modal.find("#modal_header");
      
    modal.drags({handle: "#modal_header"});
  },

  closeModal: function() {
    var closeLink = $("#close_modal_link");

    closeLink.on("click", function() {
      Modal.removeModal();
    });
  },

  removeModal: function() {
    var modal = $("#modal_wrap");
    modal.remove();
  }
};