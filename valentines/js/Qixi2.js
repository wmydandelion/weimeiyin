///////////
//�ƶ��� //
///////////
var lamp = {
    elem: $('.b_background'),
    bright: function() {
        this.elem.addClass('lamp-bright');
    },
    dark: function() {
        this.elem.removeClass('lamp-bright');
    }
};


function doorAction(left, right, time) {
    var $door = $('.door');
    var doorLeft = $('.door-left');
    var doorRight = $('.door-right');
    var defer = $.Deferred();
    var count = 2;
    // �ȴ��������
    var complete = function() {
        if (count == 1) {
            defer.resolve();
            return;
        }
        count--;
    };
    doorLeft.transition({
        'left': left
    }, time, complete);
    doorRight.transition({
        'left': right
    }, time, complete);
    return defer;
}

// ����
function openDoor() {
    return doorAction('-50%', '100%', 2000);
}

// ����
function shutDoor() {
    return doorAction('0%', '50%', 2000);
}


var instanceX;

/**
 * С����·
 * @param {[type]} container [description]
 */
function BoyWalk() {

    var container = $("#content");
    // ҳ���������
    var visualWidth = container.width();
    var visualHeight = container.height();

    // ��ȡ����
    var getValue = function(className) {
        var $elem = $('' + className + '');
        // ��·��·������
        return {
            height: $elem.height(),
            top: $elem.position().top
        };
    };
    // ·��Y��
    var pathY = function() {
        var data = getValue('.a_background_middle');
        return data.top + data.height / 2;
    }();

    var $boy = $("#boy");
    var boyWidth = $boy.width();
    var boyHeight = $boy.height();

    //�����¸߶�
    $boy.css({
        top: pathY - boyHeight + 25
    });

    // ��ͣ��·
    function pauseWalk() {
        $boy.addClass('pauseWalk');
    }

    // �ָ���·
    function restoreWalk() {
        $boy.removeClass('pauseWalk');
    }

    // css3�Ķ����仯
    function slowWalk() {
        $boy.addClass('slowWalk');
    }

    // ��transition���˶�
    function stratRun(options, runTime) {
        var dfdPlay = $.Deferred();
        // �ָ���·
        restoreWalk();
        // �˶�������
        $boy.transition(
            options,
            runTime,
            'linear',
            function() {
                dfdPlay.resolve(); // �������
            });
        return dfdPlay;
    }

    // ��ʼ��·
    function walkRun(time, dist, disY) {
        time = time || 3000;
        // �Ŷ���
        slowWalk();
        // ��ʼ��·
        var d1 = stratRun({
            'left': dist + 'px',
            'top': disY ? disY : undefined
        }, time);
        return d1;
    }


    // �߽��̵�
    function walkToShop(runTime) {
        var defer = $.Deferred();
        var doorObj = $('.door')
        // �ŵ�����
        var offsetDoor = doorObj.offset();
        var doorOffsetLeft = offsetDoor.left;
        // С����ǰ������
        var offsetBoy = $boy.offset();
        var boyOffetLeft = offsetBoy.left;

        // ��ǰ��Ҫ�ƶ�������
        instanceX = (doorOffsetLeft + doorObj.width() / 2) - (boyOffetLeft + $boy.width() / 2);

        // ��ʼ��·
        var walkPlay = stratRun({
            transform: 'translateX(' + instanceX + 'px),scale(0.3,0.3)',
            opacity: 0.1
        }, 2000);
        // ��·���
        walkPlay.done(function() {
            $boy.css({
                opacity: 0
            })
            defer.resolve();
        })
        return defer;
    }

    // �߳���
    function walkOutShop(runTime) {
        var defer = $.Deferred();
        restoreWalk();
        // ��ʼ��·
        var walkPlay = stratRun({
            transform: 'translateX(' + instanceX + 'px),translateY(0),,scale(1,1)',
            opacity: 1
        }, runTime);
        // ��·���
        walkPlay.done(function() {
            defer.resolve();
        })
        return defer;
    }


    // ȡ��
    function talkFlower() {
        // ������ʱ�ȴ�Ч��
        var defer = $.Deferred();
        setTimeout(function() {
            // ȡ��
            $boy.addClass('slowFlolerWalk');
            defer.resolve();
        }, 1000);
        return defer;
    }

    // �����ƶ�����
    function calculateDist(direction, proportion) {
        return (direction == "x" ?
                visualWidth : visualHeight) * proportion;
    }

    return {
        // ��ʼ��·
        walkTo: function(time, proportionX, proportionY) {
            var distX = calculateDist('x', proportionX)
            var distY = calculateDist('y', proportionY)
            return walkRun(time, distX, distY);
        },
        // �߽��̵�
        toShop: function() {
            return walkToShop.apply(null, arguments);
        },
        // �߳��̵�
        outShop: function() {
            return walkOutShop.apply(null, arguments);
        },
        // ֹͣ��·
        stopWalk: function() {
            pauseWalk();
        },
        setColoer: function(value) {
            $boy.css('background-color', value);
        },
        // ȡ��
        talkFlower: function() {
            return talkFlower();
        }

    }
}