verifyEmail = function() {
    // �̸��� ���� ��ũ��Ʈ �ۼ�
    var emailVal = $("#email").val();
  
    var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    // ������ ����� ���Խ� ���� regExp�� ����
  
    if (emailVal.match(regExp) != null) {
      alert('Good!');
    }
    else {
      alert('Error');
    }
  };