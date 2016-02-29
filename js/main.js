$(document).ready(function(){

var protect = 0; 
var modelA = 0; var modelB = 0; var modelC = 0; var modelD = 0; 
var coresA = 0; var coresB = 0; var coresC = 0; var coresD = 0;
var coresVCSA = 4; var coresLog = 4; var coresManager = 2; var coresExtension = 2;
var coresESRS = 1; var coresVDP = 4; var coresRPVM = 2; var coresCloud = 2;
var memoryA = 0; var memoryB = 0; var memoryC = 0; var memoryD = 0;
var memoryVCSA = 16; var memoryLog = 8; var memoryManager = 4; var memoryExtension = 4;
var memoryESRS = 4; var memoryVDP = 4; var memoryRPVM = 4; var memoryCloud = 4;
var ssdCountA = 0; var ssdCountB = 0; var ssdCountC = 0; var ssdCountD = 0;
var ssdCapA = 0; var ssdCapB = 0; var ssdCapC = 0; var ssdCapD = 0;
var hddCountA = 0; var hddCountB = 0; var hddCountC = 0; var hddCountD = 0;
var hddCapA = 0; var hddCapB = 0; var hddCapC = 0; var hddCapD = 0;
var storageVCSA = 176; var storageLog = 137; var storageManager = 41; var storageExtension = 84;
var storageESRS = 68; var storageVDP = 104; var storageRPVM = 104; var storageCloud = 61;
var quantityA = 0; var quantityB = 0; var quantityC = 0; var quantityD = 0;
var coresOverhead = 21; var memoryOverhead = 48; var storageOverhead = 775;
var coresUsable = 0; var memoryUsable= 0; var storageUsable = 0;
var appliancesRaw = 0; var nodesRaw = 0; var coresRaw = 0; var memoryRaw = 0; var storageRaw = 0;
var helped = 1;

	//Disable all-flash features.
	$('#radCluster2').attr('disabled', true);
	$('#radProtection2').attr('disabled', true);

	function clearA() {
		clearModelA();
		clearMemoryA();
		clearDiskA();
		clearQuantityA();
	}
	
	function clearModelA() {
		if(modelA == 60){
			clear60();
		}
		else if(modelA == 120){
			clear120();
		}
		else if(modelA == 160){
			clear160();
		}
		else if(modelA == 200){
			clear200();
		}
		$('#btnModel60A').removeClass('active');
		$('#btnModel120A').removeClass('active');
		$('#btnModel160A').removeClass('active');
		$('#btnModel200A').removeClass('active');
		modelA = 0;
		coresA = 0;
	}
	
	function clearMemoryA() {
		$('#btnMemory64A').removeClass('active');
		$('#btnMemory128A').removeClass('active');
		$('#btnMemory192A').removeClass('active');
		$('#btnMemory256A').removeClass('active');
		$('#btnMemory512A').removeClass('active');
		memoryA = 0;
		$('#divMemoryA').slideUp();
	}
	
	function clearDiskA() {
		$('#btnDisk1A').removeClass('active');
		$('#btnDisk2A').removeClass('active');
		$('#btnDisk3A').removeClass('active');
		$('#btnDisk4A').removeClass('active');
		$('#btnDisk5A').removeClass('active');
		$('#btnDisk6A').removeClass('active');
		ssdCountA = 0;
		ssdCapA = 0;
		hddCountA = 0;
		hddCapA = 0;
		$('#divDiskA').slideUp();
	}
	
	function clearQuantityA(){
		quantityA = 0;
		$('#fldQuantityA').val(0);
		$('#divQuantityA').slideUp();
	}
	
	function clearB() {
		clearModelB();
		clearMemoryB();
		clearDiskB();
		clearQuantityB();
	}
	
	function clearModelB() {
		if(modelB == 60){
			clear60();
		}
		else if(modelB == 120){
			clear120();
		}
		else if(modelB == 160){
			clear160();
		}
		else if(modelB == 200){
			clear200();
		}
		$('#btnModel60B').removeClass('active');
		$('#btnModel120B').removeClass('active');
		$('#btnModel160B').removeClass('active');
		$('#btnModel200B').removeClass('active');
		modelB = 0;
		coresB = 0;
	}
	
	function clearMemoryB() {
		$('#btnMemory64B').removeClass('active');
		$('#btnMemory128B').removeClass('active');
		$('#btnMemory192B').removeClass('active');
		$('#btnMemory256B').removeClass('active');
		$('#btnMemory512B').removeClass('active');
		memoryB = 0;
		$('#divMemoryB').slideUp();
	}
	
	function clearDiskB() {
		$('#btnDisk1B').removeClass('active');
		$('#btnDisk2B').removeClass('active');
		$('#btnDisk3B').removeClass('active');
		$('#btnDisk4B').removeClass('active');
		$('#btnDisk5B').removeClass('active');
		$('#btnDisk6B').removeClass('active');
		ssdCountB = 0;
		ssdCapB = 0;
		hddCountB = 0;
		hddCapB = 0;
		$('#divDiskB').slideUp();
	}
	
	function clearQuantityB(){
		quantityB = 0;
		$('#fldQuantityB').val(0);
		$('#divQuantityB').slideUp();
	}
	
	function clearC() {
		clearModelC();
		clearMemoryC();
		clearDiskC();
		clearQuantityC();
	}
	
	function clearModelC() {
		if(modelC == 60){
			clear60();
		}
		else if(modelC == 120){
			clear120();
		}
		else if(modelC == 160){
			clear160();
		}
		else if(modelC == 200){
			clear200();
		}
		$('#btnModel60C').removeClass('active');
		$('#btnModel120C').removeClass('active');
		$('#btnModel160C').removeClass('active');
		$('#btnModel200C').removeClass('active');
		modelC = 0;
		coresC = 0;
	}
	
	function clearMemoryC() {
		$('#btnMemory64C').removeClass('active');
		$('#btnMemory128C').removeClass('active');
		$('#btnMemory192C').removeClass('active');
		$('#btnMemory256C').removeClass('active');
		$('#btnMemory512C').removeClass('active');
		memoryC = 0;
		$('#divMemoryC').slideUp();
	}
	
	function clearDiskC() {
		$('#btnDisk1C').removeClass('active');
		$('#btnDisk2C').removeClass('active');
		$('#btnDisk3C').removeClass('active');
		$('#btnDisk4C').removeClass('active');
		$('#btnDisk5C').removeClass('active');
		$('#btnDisk6C').removeClass('active');
		ssdCountC = 0;
		ssdCapC = 0;
		hddCountC = 0;
		hddCapC = 0;
		$('#divDiskC').slideUp();
	}
	
	function clearQuantityC(){
		quantityC = 0;
		$('#fldQuantityC').val(0);
		$('#divQuantityC').slideUp();
	}
	
	function clearD() {
		clearModelD();
		clearMemoryD();
		clearDiskD();
		clearQuantityD();
	}
	
	function clearModelD() {
		if(modelD == 60){
			clear60();
		}
		else if(modelD == 120){
			clear120();
		}
		else if(modelD == 160){
			clear160();
		}
		else if(modelD == 200){
			clear200();
		}
		$('#btnModel60D').removeClass('active');
		$('#btnModel120D').removeClass('active');
		$('#btnModel160D').removeClass('active');
		$('#btnModel200D').removeClass('active');
		modelD = 0;
		coresD = 0;
	}
	
	function clearMemoryD() {
		$('#btnMemory64D').removeClass('active');
		$('#btnMemory128D').removeClass('active');
		$('#btnMemory192D').removeClass('active');
		$('#btnMemory256D').removeClass('active');
		$('#btnMemory512D').removeClass('active');
		memoryD = 0;
		$('#divMemoryD').slideUp();
	}
	
	function clearDiskD() {
		$('#btnDisk1D').removeClass('active');
		$('#btnDisk2D').removeClass('active');
		$('#btnDisk3D').removeClass('active');
		$('#btnDisk4D').removeClass('active');
		$('#btnDisk5D').removeClass('active');
		$('#btnDisk6D').removeClass('active');
		ssdCountD = 0;
		ssdCapD = 0;
		hddCountD = 0;
		hddCapD = 0;
		$('#divDiskD').slideUp();
	}
	
	function clearQuantityD(){
		quantityD = 0;
		$('#fldQuantityD').val(0);
		$('#divQuantityD').slideUp();
	}
	
	function clear60(){
		$('#btnModel60A').attr('disabled', false);
		$('#btnModel60B').attr('disabled', false);
		$('#btnModel60C').attr('disabled', false);
		$('#btnModel60D').attr('disabled', false);
	}
	
	function clear120(){
		$('#btnModel120A').attr('disabled', false);
		$('#btnModel120B').attr('disabled', false);
		$('#btnModel120C').attr('disabled', false);
		$('#btnModel120D').attr('disabled', false);
	}
	
	function clear160(){
		$('#btnModel160A').attr('disabled', false);
		$('#btnModel160B').attr('disabled', false);
		$('#btnModel160C').attr('disabled', false);
		$('#btnModel160D').attr('disabled', false);
	}
	
	function clear200(){
		$('#btnModel200A').attr('disabled', false);
		$('#btnModel200B').attr('disabled', false);
		$('#btnModel200C').attr('disabled', false);
		$('#btnModel200D').attr('disabled', false);
	}
	
	function clearCluster(){
		$('#radCluster1').removeClass('active');
		$('#radCluster2').removeClass('active');
	}
	
	function clearProtection(){
		$('#radProtection1').removeClass('active');
		$('#radProtection2').removeClass('active');
	}
	
	function updateStatsA(){
		$('#tblModelA').text('VxRAIL ' + modelA);
		$('#tblAppliancesA').text(quantityA);
		$('#tblNodesA').text(quantityA * 4);
		$('#tblCoresA').text(quantityA * 4 * coresA);
		$('#tblMemoryA').text(quantityA * 4 * memoryA + ' GB');
		$('#tblStorageA').text(quantityA * 4 * hddCountA * hddCapA + ' GB');
		updateStatsRaw();
	}
	
	function updateStatsB(){
		$('#tblModelB').text('VxRAIL ' + modelB);
		$('#tblAppliancesB').text(quantityB);
		$('#tblNodesB').text(quantityB * 4);
		$('#tblCoresB').text(quantityB * 4 * coresB);
		$('#tblMemoryB').text(quantityB * 4 * memoryB + ' GB');
		$('#tblStorageB').text(quantityB * 4 * hddCountB * hddCapB + ' GB');
		updateStatsRaw();
	}
	
	function updateStatsC(){
		$('#tblModelC').text('VxRAIL ' + modelC);
		$('#tblAppliancesC').text(quantityC);
		$('#tblNodesC').text(quantityC * 4);
		$('#tblCoresC').text(quantityC * 4 * coresC);
		$('#tblMemoryC').text(quantityC * 4 * memoryC + ' GB');
		$('#tblStorageC').text(quantityC * 4 * hddCountC * hddCapC + ' GB');
		updateStatsRaw();
	}
	
	function updateStatsD(){
		$('#tblModelD').text('VxRAIL ' + modelD);
		$('#tblAppliancesD').text(quantityD);
		$('#tblNodesD').text(quantityD * 4);
		$('#tblCoresD').text(quantityD * 4 * coresD);
		$('#tblMemoryD').text(quantityD * 4 * memoryD + ' GB');
		$('#tblStorageD').text(quantityD * 4 * hddCountD * hddCapD + ' GB');
		updateStatsRaw();
	}
	
	function updateStatsRaw(){
		appliancesRaw = quantityA + quantityB + quantityC + quantityD;
		nodesRaw = 4 * (quantityA + quantityB + quantityC + quantityD);
		coresRaw = 4 * ((quantityA * coresA) + (quantityB * coresB) + (quantityC * coresC) + (quantityD * coresD));
		memoryRaw = 4 * ((quantityA * memoryA) + (quantityB * memoryB) + (quantityC * memoryC) + (quantityD * memoryD));
		storageRaw = 4 * ((quantityA * hddCountA * hddCapA) + (quantityB * hddCountB * hddCapB) + (quantityC * hddCountC * hddCapC) + (quantityD * hddCountD * hddCapD));
		$('#tblAppliancesRaw').text(appliancesRaw);
		$('#tblNodesRaw').text(nodesRaw);
		$('#tblCoresRaw').text(coresRaw);
		$('#tblMemoryRaw').text(memoryRaw + ' GB');
		$('#tblStorageRaw').text(storageRaw + ' GB');
		updateStatsUsable();
	}

	function updateStatsOverhead(){
		coresOverhead = coresVCSA + coresLog + coresManager + coresExtension + coresESRS + coresVDP + coresRPVM + coresCloud;
		memoryOverhead =  memoryVCSA + memoryLog + memoryManager + memoryExtension + memoryESRS + memoryVDP + memoryRPVM + memoryCloud;
		storageOverhead =  storageVCSA + storageLog + storageManager + storageExtension + storageESRS + storageVDP + storageRPVM + storageCloud;
		$('#tblCoresOverhead').text(coresOverhead);
		$('#tblMemoryOverhead').text(memoryOverhead + ' GB');
		$('#tblStorageOverhead').text(storageOverhead + ' GB');
		updateStatsRaw();
	}

	function updateStatsESRS(){
		$('#tblCoresESRS').text(coresESRS);
		$('#tblMemoryESRS').text(memoryESRS + ' GB');
		$('#tblStorageESRS').text(storageESRS + ' GB');
		updateStatsOverhead();
	}

	function updateStatsVDP(){
		$('#tblCoresVDP').text(coresVDP);
		$('#tblMemoryVDP').text(memoryVDP + ' GB');
		$('#tblStorageVDP').text(storageVDP + ' GB');
		updateStatsOverhead();
	}

	function updateStatsRPVM(){
		$('#tblCoresRPVM').text(coresRPVM);
		$('#tblMemoryRPVM').text(memoryRPVM + ' GB');
		$('#tblStorageRPVM').text(storageRPVM + ' GB');
		updateStatsOverhead();
	}

	function updateStatsCloudArray(){
		$('#tblCoresCloud').text(coresCloud);
		$('#tblMemoryCloud').text(memoryCloud + ' GB');
		$('#tblStorageCloud').text(storageCloud + ' GB');
		updateStatsOverhead();
	}

	function updateStatsUsable(){
		coresUsable = coresRaw - coresOverhead;
		memoryUsable = memoryRaw - memoryOverhead;
		storageUsable = storageRaw - storageOverhead;
		$('#tblAppliancesUsable').text(appliancesRaw);
		$('#tblNodesUsable').text(nodesRaw);
		$('#tblCoresUsable').text(coresUsable);
		$('#tblMemoryUsable').text(memoryUsable + 'GB');
		$('#tblStorageUsable').text(storageUsable + 'GB');
	}
	
	//Event handler for 'Cluster Type' radio buttons.
	$('#radCluster1').click(function(){
		if (helped == 0) {
			$('#help1').hide();
			$('#helpSpacer2').slideDown();
			$('#help2').slideDown();
		}
		$('#divProtection').slideDown();
	});
	
	//Event handler for 'Protection' radio buttons.
	$('#radProtection1').click(function(){
		if (helped == 0) {
			$('#helpSpacer1').slideUp();
			$('#helpSpacer2').slideUp();
			$('#help2').slideUp()
			$('#help3').slideDown()
			$('#minusPanel1').hide();
		}
		$('#divConfiguration').slideDown();
		$('#divPanel1').slideDown();
		
		protect = 2;
	});
	
	//Event handler for Panel 1 - sign.
	$('#minusPanel1').click(function(){
		clearA();
		updateStatsA();
	});
	
	//Event handler for Panel 1 + sign.
	$('#plusPanel1').click(function(){
		$('#minusPanel1').hide();
		$('#plusPanel1').hide();
		$('#divPanel2').slideDown();
		if (helped == 0) {
			$('#help4').slideDown();
			$('#plusPanel2').hide();
		}
	});
	
	//Event handler for Panel 2 - sign.
	$('#minusPanel2').click(function(){
		$('#minusPanel1').show();
		$('#plusPanel1').show();
		$('#divPanel2').slideUp();
		if (helped == 0) {
			$('#help3').slideUp();
			$('#help4').slideUp();
			$('#help5').slideDown();
			$('#minusPanel1').hide();
		}
		clearB();
		updateStatsB();
	});
	
	//Event handler for Panel 2 + sign.
	$('#plusPanel2').click(function(){
		$('#minusPanel2').hide();
		$('#plusPanel2').hide();
		$('#divPanel3').slideDown();
	});
	
	//Event handler for Panel 3 - sign.
	$('#minusPanel3').click(function(){
		$('#minusPanel2').show();
		$('#plusPanel2').show();
		$('#divPanel3').slideUp();
		clearC();
		updateStatsC();
	});
	
	//Event handler for Panel 3 + sign.
	$('#plusPanel3').click(function(){
		$('#minusPanel3').hide();
		$('#plusPanel3').hide();
		$('#divPanel4').slideDown();
	});
	
	//Event handler for Panel 4 - sign.
	$('#minusPanel4').click(function(){
		$('#minusPanel3').show();
		$('#plusPanel3').show();
		$('#divPanel4').slideUp();
		clearD();
		updateStatsD();
	});
	
	//Event handler for Panel A Model 60.
	$('#btnModel60A').on('click', function(){
		if (helped == 0) {
			$('#help5').slideUp();
			$('#help6').slideDown();
		}
		
		//Panel Title
		$('#panelATitle').hide();
		$('#panelATitle60').show();
		$('#panelATitle120').hide();
		$('#panelATitle160').hide();
		$('#panelATitle200').hide();
		
		//Model Validation
		clearMemoryA();
		clearDiskA();
		clearQuantityA();
		if(modelA == 120){
			clear120();
		}
		else if(modelA == 160){
			clear160();
		}
		else if(modelA == 200){
			clear200();
		}
		$('#btnModel60A').attr('disabled', false);
		$('#btnModel60B').attr('disabled', true);
		$('#btnModel60C').attr('disabled', true);
		$('#btnModel60D').attr('disabled', true);
		
		//Memory Validation
		$('#btnMemory64A').attr('disabled', false);
		$('#btnMemory128A').attr('disabled', true);
		$('#btnMemory192A').attr('disabled', true);
		$('#btnMemory256A').attr('disabled', true);
		$('#btnMemory512A').attr('disabled', true);
		
		//Disk Validation
		$('#btnDisk1A').attr('disabled', false);
		$('#btnDisk2A').attr('disabled', true);
		$('#btnDisk3A').attr('disabled', false);
		$('#btnDisk4A').attr('disabled', true);
		$('#btnDisk5A').attr('disabled', false);
		$('#btnDisk6A').attr('disabled', true);
		
		$('#divMemoryA').slideDown();
		modelA = 60;
		quantityA = 1;
		$('#fldQuantityA').val(1);
		coresA = 6;
		updateStatsA();
	});
	
	//Event handler for Panel A Model 120.
	$('#btnModel120A').click(function(){
		
		if (helped == 0) {
			$('#help5').slideUp();
			$('#help6').slideDown();
		}
		
		//Panel Title
		$('#panelATitle').hide();
		$('#panelATitle60').hide();
		$('#panelATitle120').show();
		$('#panelATitle160').hide();
		$('#panelATitle200').hide();
		
		//Model Validation
		clearMemoryA();
		clearDiskA();
		clearQuantityA();
		if(modelA == 60){
			clear60();
		}
		else if(modelA == 160){
			clear160();
		}
		else if(modelA == 200){
			clear200();
		}
		$('#btnModel120A').attr('disabled', false);
		$('#btnModel120B').attr('disabled', true);
		$('#btnModel120C').attr('disabled', true);
		$('#btnModel120D').attr('disabled', true);
		
		//Memory Validation
		$('#btnMemory64A').attr('disabled', true);
		$('#btnMemory128A').attr('disabled', false);
		$('#btnMemory192A').attr('disabled', false);
		$('#btnMemory256A').attr('disabled', true);
		$('#btnMemory512A').attr('disabled', true);
		
		//Disk Validation
		$('#btnDisk1A').attr('disabled', true);
		$('#btnDisk2A').attr('disabled', false);
		$('#btnDisk3A').attr('disabled', true);
		$('#btnDisk4A').attr('disabled', false);
		$('#btnDisk5A').attr('disabled', true);
		$('#btnDisk6A').attr('disabled', false);
		
		$('#divMemoryA').slideDown();
		modelA = 120;
		quantityA = 1;
		$('#fldQuantityA').val(1);
		coresA = 12;
		updateStatsA();
	});
	
	//Event handler for Panel A Model 160.
	$('#btnModel160A').click(function(){
		
		if (helped == 0) {
			$('#help5').slideUp();
			$('#help6').slideDown();
		}
		
		//Panel Title
		$('#panelATitle').hide();
		$('#panelATitle60').hide();
		$('#panelATitle120').hide();
		$('#panelATitle160').show();
		$('#panelATitle200').hide();
		
		//Model Validation
		clearMemoryA();
		clearDiskA();
		clearQuantityA();
		if(modelA == 60){
			clear60();
		}
		else if(modelA == 120){
			clear120();
		}
		else if(modelA == 200){
			clear200();
		}
		$('#btnModel160A').attr('disabled', false);
		$('#btnModel160B').attr('disabled', true);
		$('#btnModel160C').attr('disabled', true);
		$('#btnModel160D').attr('disabled', true);
		
		//Memory Validation
		$('#btnMemory64A').attr('disabled', true);
		$('#btnMemory128A').attr('disabled', true);
		$('#btnMemory192A').attr('disabled', true);
		$('#btnMemory256A').attr('disabled', false);
		$('#btnMemory512A').attr('disabled', false);
		
		//Disk Validation
		$('#btnDisk1A').attr('disabled', true);
		$('#btnDisk2A').attr('disabled', true);
		$('#btnDisk3A').attr('disabled', true);
		$('#btnDisk4A').attr('disabled', false);
		$('#btnDisk5A').attr('disabled', true);
		$('#btnDisk6A').attr('disabled', false);
		
		$('#divMemoryA').slideDown();
		modelA = 160;
		quantityA = 1;
		$('#fldQuantityA').val(1);
		coresA = 16;
		updateStatsA();
	});
	
	//Event handler for Panel A Model 200.
	$('#btnModel200A').click(function(){
		
		if (helped == 0) {
			$('#help5').slideUp();
			$('#help6').slideDown();
		}
		
		//Panel Title
		$('#panelATitle').hide();
		$('#panelATitle60').hide();
		$('#panelATitle120').hide();
		$('#panelATitle160').hide();
		$('#panelATitle200').show();
		
		//Model Validation
		clearMemoryA();
		clearDiskA();
		clearQuantityA();
		if(modelA == 60){
			clear60();
		}
		else if(modelA == 120){
			clear120();
		}
		else if(modelA == 160){
			clear160();
		}
		$('#btnModel200A').attr('disabled', false);
		$('#btnModel200B').attr('disabled', true);
		$('#btnModel200C').attr('disabled', true);
		$('#btnModel200D').attr('disabled', true);
		
		//Memory Validation
		$('#btnMemory64A').attr('disabled', true);
		$('#btnMemory128A').attr('disabled', true);
		$('#btnMemory192A').attr('disabled', true);
		$('#btnMemory256A').attr('disabled', false);
		$('#btnMemory512A').attr('disabled', false);
		
		//Disk Validation
		$('#btnDisk1A').attr('disabled', true);
		$('#btnDisk2A').attr('disabled', true);
		$('#btnDisk3A').attr('disabled', true);
		$('#btnDisk4A').attr('disabled', false);
		$('#btnDisk5A').attr('disabled', true);
		$('#btnDisk6A').attr('disabled', false);
		
		$('#divMemoryA').slideDown();
		modelA = 200;
		quantityA = 1;
		$('#fldQuantityA').val(1);
		coresA = 20;
		updateStatsA();
	});
	
	//Event handler for Panel B Model 60.
	$('#btnModel60B').click(function(){
		
		//Panel Title
		$('#panelBTitle').hide();
		$('#panelBTitle60').show();
		$('#panelBTitle120').hide();
		$('#panelBTitle160').hide();
		$('#panelBTitle200').hide();
		
		//Model Validation
		clearMemoryB();
		clearDiskB();
		clearQuantityB();
		if(modelB == 120){
			clear120();
		}
		else if(modelB == 160){
			clear160();
		}
		else if(modelB == 200){
			clear200();
		}
		$('#btnModel60A').attr('disabled', true);
		$('#btnModel60B').attr('disabled', false);
		$('#btnModel60C').attr('disabled', true);
		$('#btnModel60D').attr('disabled', true);
		
		//Memory Validation
		$('#btnMemory64B').attr('disabled', false);
		$('#btnMemory128B').attr('disabled', true);
		$('#btnMemory192B').attr('disabled', true);
		$('#btnMemory256B').attr('disabled', true);
		$('#btnMemory512B').attr('disabled', true);
		
		//Disk Validation
		$('#btnDisk1B').attr('disabled', false);
		$('#btnDisk2B').attr('disabled', true);
		$('#btnDisk3B').attr('disabled', false);
		$('#btnDisk4B').attr('disabled', true);
		$('#btnDisk5B').attr('disabled', false);
		$('#btnDisk6B').attr('disabled', true);
		
		$('#divMemoryB').slideDown();
		modelB = 60;
		quantityB = 1;
		$('#fldQuantityB').val(1);
		coresB = 6;
		updateStatsB();
	});
	
	//Event handler for Panel B Model 120.
	$('#btnModel120B').click(function(){
		
		//Panel Title
		$('#panelBTitle').hide();
		$('#panelBTitle60').hide();
		$('#panelBTitle120').show();
		$('#panelBTitle160').hide();
		$('#panelBTitle200').hide();
		
		//Model Validation
		clearMemoryB();
		clearDiskB();
		clearQuantityB();
		if(modelB == 60){
			clear60();
		}
		else if(modelB == 160){
			clear160();
		}
		else if(modelB == 200){
			clear200();
		}
		$('#btnModel120A').attr('disabled', true);
		$('#btnModel120B').attr('disabled', false);
		$('#btnModel120C').attr('disabled', true);
		$('#btnModel120D').attr('disabled', true);
		
		//Memory Validation
		$('#btnMemory64B').attr('disabled', true);
		$('#btnMemory128B').attr('disabled', false);
		$('#btnMemory192B').attr('disabled', false);
		$('#btnMemory256B').attr('disabled', true);
		$('#btnMemory512B').attr('disabled', true);
		
		//Disk Validation
		$('#btnDisk1B').attr('disabled', true);
		$('#btnDisk2B').attr('disabled', false);
		$('#btnDisk3B').attr('disabled', true);
		$('#btnDisk4B').attr('disabled', false);
		$('#btnDisk5B').attr('disabled', true);
		$('#btnDisk6B').attr('disabled', false);
		
		$('#divMemoryB').slideDown();
		modelB = 120;
		quantityB = 1;
		$('#fldQuantityB').val(1);
		coresB = 12;
		updateStatsB();
	});
	
	//Event handler for Panel B Model 160.
	$('#btnModel160B').click(function(){
		
		//Panel Title
		$('#panelBTitle').hide();
		$('#panelBTitle60').hide();
		$('#panelBTitle120').hide();
		$('#panelBTitle160').show();
		$('#panelBTitle200').hide();
		
		//Model Validation
		clearMemoryB();
		clearDiskB();
		clearQuantityB();
		if(modelB == 60){
			clear60();
		}
		else if(modelB == 120){
			clear120();
		}
		else if(modelB == 200){
			clear200();
		}
		$('#btnModel160A').attr('disabled', true);
		$('#btnModel160B').attr('disabled', false);
		$('#btnModel160C').attr('disabled', true);
		$('#btnModel160D').attr('disabled', true);
		
		//Memory Validation
		$('#btnMemory64B').attr('disabled', true);
		$('#btnMemory128B').attr('disabled', true);
		$('#btnMemory192B').attr('disabled', true);
		$('#btnMemory256B').attr('disabled', false);
		$('#btnMemory512B').attr('disabled', false);
		
		//Disk Validation
		$('#btnDisk1B').attr('disabled', true);
		$('#btnDisk2B').attr('disabled', true);
		$('#btnDisk3B').attr('disabled', true);
		$('#btnDisk4B').attr('disabled', false);
		$('#btnDisk5B').attr('disabled', true);
		$('#btnDisk6B').attr('disabled', false);
		
		$('#divMemoryB').slideDown();
		modelB = 160;
		quantityB = 1;
		$('#fldQuantityB').val(1);
		coresB = 16;
		updateStatsB();
	});
	
	//Event handler for Panel B Model 200.
	$('#btnModel200B').click(function(){
		
		//Panel Title
		$('#panelBTitle').hide();
		$('#panelBTitle60').hide();
		$('#panelBTitle120').hide();
		$('#panelBTitle160').hide();
		$('#panelBTitle200').show();
		
		//Model Validation
		clearMemoryB();
		clearDiskB();
		clearQuantityB();
		if(modelB == 60){
			clear60();
		}
		else if(modelB == 120){
			clear120();
		}
		else if(modelB == 160){
			clear160();
		}
		$('#btnModel200A').attr('disabled', true);
		$('#btnModel200B').attr('disabled', false);
		$('#btnModel200C').attr('disabled', true);
		$('#btnModel200D').attr('disabled', true);
		
		//Memory Validation
		$('#btnMemory64B').attr('disabled', true);
		$('#btnMemory128B').attr('disabled', true);
		$('#btnMemory192B').attr('disabled', true);
		$('#btnMemory256B').attr('disabled', false);
		$('#btnMemory512B').attr('disabled', false);
		
		//Disk Validation
		$('#btnDisk1B').attr('disabled', true);
		$('#btnDisk2B').attr('disabled', true);
		$('#btnDisk3B').attr('disabled', true);
		$('#btnDisk4B').attr('disabled', false);
		$('#btnDisk5B').attr('disabled', true);
		$('#btnDisk6B').attr('disabled', false);
		
		$('#divMemoryB').slideDown();
		modelB = 200;
		quantityB = 1;
		$('#fldQuantityB').val(1);
		coresB = 20;
		updateStatsB();
	});
	
	//Event handler for Panel C Model 60.
	$('#btnModel60C').click(function(){
		
		//Panel Title
		$('#panelCTitle').hide();
		$('#panelCTitle60').show();
		$('#panelCTitle120').hide();
		$('#panelCTitle160').hide();
		$('#panelCTitle200').hide();
		
		//Model Validation
		clearMemoryC();
		clearDiskC();
		clearQuantityC();
		if(modelC == 120){
			clear120();
		}
		else if(modelC == 160){
			clear160();
		}
		else if(modelC == 200){
			clear200();
		}
		$('#btnModel60A').attr('disabled', true);
		$('#btnModel60B').attr('disabled', true);
		$('#btnModel60C').attr('disabled', false);
		$('#btnModel60D').attr('disabled', true);
		
		//Memory Validation
		$('#btnMemory64C').attr('disabled', false);
		$('#btnMemory128C').attr('disabled', true);
		$('#btnMemory192C').attr('disabled', true);
		$('#btnMemory256C').attr('disabled', true);
		$('#btnMemory512C').attr('disabled', true);
		
		//Disk Validation
		$('#btnDisk1C').attr('disabled', false);
		$('#btnDisk2C').attr('disabled', true);
		$('#btnDisk3C').attr('disabled', false);
		$('#btnDisk4C').attr('disabled', true);
		$('#btnDisk5C').attr('disabled', false);
		$('#btnDisk6C').attr('disabled', true);
		
		$('#divMemoryC').slideDown();
		modelC = 60;
		quantityC = 1;
		$('#fldQuantityC').val(1);
		coresC = 6;
		updateStatsC();
	});
	
	//Event handler for Panel C Model 120.
	$('#btnModel120C').click(function(){
		
		//Panel Title
		$('#panelCTitle').hide();
		$('#panelCTitle60').hide();
		$('#panelCTitle120').show();
		$('#panelCTitle160').hide();
		$('#panelCTitle200').hide();
		
		//Model Validation
		clearMemoryC();
		clearDiskC();
		clearQuantityC();
		if(modelC == 60){
			clear60();
		}
		else if(modelC == 160){
			clear160();
		}
		else if(modelC == 200){
			clear200();
		}
		$('#btnModel120A').attr('disabled', true);
		$('#btnModel120B').attr('disabled', true);
		$('#btnModel120C').attr('disabled', false);
		$('#btnModel120D').attr('disabled', true);
		
		//Memory Validation
		$('#btnMemory64C').attr('disabled', true);
		$('#btnMemory128C').attr('disabled', false);
		$('#btnMemory192C').attr('disabled', false);
		$('#btnMemory256C').attr('disabled', true);
		$('#btnMemory512C').attr('disabled', true);
		
		//Disk Validation
		$('#btnDisk1C').attr('disabled', true);
		$('#btnDisk2C').attr('disabled', false);
		$('#btnDisk3C').attr('disabled', true);
		$('#btnDisk4C').attr('disabled', false);
		$('#btnDisk5C').attr('disabled', true);
		$('#btnDisk6C').attr('disabled', false);
		
		$('#divMemoryC').slideDown();
		modelC = 120;
		quantityC = 1;
		$('#fldQuantityC').val(1);
		coresC = 12;
		updateStatsC();
	});
	
	//Event handler for Panel C Model 160.
	$('#btnModel160C').click(function(){
		
		//Panel Title
		$('#panelCTitle').hide();
		$('#panelCTitle60').hide();
		$('#panelCTitle120').hide();
		$('#panelCTitle160').show();
		$('#panelCTitle200').hide();
		
		//Model Validation
		clearMemoryC();
		clearDiskC();
		clearQuantityC();
		if(modelC == 60){
			clear60();
		}
		else if(modelC == 120){
			clear120();
		}
		else if(modelC == 200){
			clear200();
		}
		$('#btnModel160A').attr('disabled', true);
		$('#btnModel160B').attr('disabled', true);
		$('#btnModel160C').attr('disabled', false);
		$('#btnModel160D').attr('disabled', true);
		
		//Memory Validation
		$('#btnMemory64C').attr('disabled', true);
		$('#btnMemory128C').attr('disabled', true);
		$('#btnMemory192C').attr('disabled', true);
		$('#btnMemory256C').attr('disabled', false);
		$('#btnMemory512C').attr('disabled', false);
		
		//Disk Validation
		$('#btnDisk1C').attr('disabled', true);
		$('#btnDisk2C').attr('disabled', true);
		$('#btnDisk3C').attr('disabled', true);
		$('#btnDisk4C').attr('disabled', false);
		$('#btnDisk5C').attr('disabled', true);
		$('#btnDisk6C').attr('disabled', false);
		
		$('#divMemoryC').slideDown();
		modelC = 160;
		quantityC = 1;
		$('#fldQuantityC').val(1);
		coresC = 16;
		updateStatsC();
	});
	
	//Event handler for Panel C Model 200.
	$('#btnModel200C').click(function(){
		
		//Panel Title
		$('#panelCTitle').hide();
		$('#panelCTitle60').hide();
		$('#panelCTitle120').hide();
		$('#panelCTitle160').hide();
		$('#panelCTitle200').show();
		
		//Model Validation
		clearMemoryC();
		clearDiskC();
		clearQuantityC();
		if(modelC == 60){
			clear60();
		}
		else if(modelC == 120){
			clear120();
		}
		else if(modelC == 160){
			clear160();
		}
		$('#btnModel200A').attr('disabled', true);
		$('#btnModel200B').attr('disabled', true);
		$('#btnModel200C').attr('disabled', false);
		$('#btnModel200D').attr('disabled', true);
		
		//Memory Validation
		$('#btnMemory64C').attr('disabled', true);
		$('#btnMemory128C').attr('disabled', true);
		$('#btnMemory192C').attr('disabled', true);
		$('#btnMemory256C').attr('disabled', false);
		$('#btnMemory512C').attr('disabled', false);
		
		//Disk Validation
		$('#btnDisk1C').attr('disabled', true);
		$('#btnDisk2C').attr('disabled', true);
		$('#btnDisk3C').attr('disabled', true);
		$('#btnDisk4C').attr('disabled', false);
		$('#btnDisk5C').attr('disabled', true);
		$('#btnDisk6C').attr('disabled', false);
		
		$('#divMemoryC').slideDown();
		modelC = 200;
		quantityC = 1;
		$('#fldQuantityC').val(1);
		coresC = 20;
		updateStatsC();
	});
	
	//Event handler for Panel D Model 60.
	$('#btnModel60D').click(function(){
		
		//Panel Title
		$('#panelDTitle').hide();
		$('#panelDTitle60').show();
		$('#panelDTitle120').hide();
		$('#panelDTitle160').hide();
		$('#panelDTitle200').hide();
		
		//Model Validation
		clearMemoryD();
		clearDiskD();
		clearQuantityD();
		if(modelD == 120){
			clear120();
		}
		else if(modelD == 160){
			clear160();
		}
		else if(modelD == 200){
			clear200();
		}
		$('#btnModel60A').attr('disabled', true);
		$('#btnModel60B').attr('disabled', true);
		$('#btnModel60C').attr('disabled', true);
		$('#btnModel60D').attr('disabled', false);
		
		//Memory Validation
		$('#btnMemory64D').attr('disabled', false);
		$('#btnMemory128D').attr('disabled', true);
		$('#btnMemory192D').attr('disabled', true);
		$('#btnMemory256D').attr('disabled', true);
		$('#btnMemory512D').attr('disabled', true);
		
		//Disk Validation
		$('#btnDisk1D').attr('disabled', false);
		$('#btnDisk2D').attr('disabled', true);
		$('#btnDisk3D').attr('disabled', false);
		$('#btnDisk4D').attr('disabled', true);
		$('#btnDisk5D').attr('disabled', false);
		$('#btnDisk6D').attr('disabled', true);
		
		$('#divMemoryD').slideDown();
		modelD = 60;
		quantityD = 1;
		$('#fldQuantityD').val(1);
		coresD = 6;
		updateStatsD();
	});
	
	//Event handler for Panel D Model 120.
	$('#btnModel120D').click(function(){
		
		//Panel Title
		$('#panelDTitle').hide();
		$('#panelDTitle60').hide();
		$('#panelDTitle120').show();
		$('#panelDTitle160').hide();
		$('#panelDTitle200').hide();
		
		//Model Validation
		clearMemoryD();
		clearDiskD();
		clearQuantityD();
		if(modelD == 60){
			clear60();
		}
		else if(modelD == 160){
			clear160();
		}
		else if(modelD == 200){
			clear200();
		}
		$('#btnModel120A').attr('disabled', true);
		$('#btnModel120B').attr('disabled', true);
		$('#btnModel120C').attr('disabled', true);
		$('#btnModel120D').attr('disabled', false);
		
		//Memory Validation
		$('#btnMemory64D').attr('disabled', true);
		$('#btnMemory128D').attr('disabled', false);
		$('#btnMemory192D').attr('disabled', false);
		$('#btnMemory256D').attr('disabled', true);
		$('#btnMemory512D').attr('disabled', true);
		
		//Disk Validation
		$('#btnDisk1D').attr('disabled', true);
		$('#btnDisk2D').attr('disabled', false);
		$('#btnDisk3D').attr('disabled', true);
		$('#btnDisk4D').attr('disabled', false);
		$('#btnDisk5D').attr('disabled', true);
		$('#btnDisk6D').attr('disabled', false);
		
		$('#divMemoryD').slideDown();
		modelD = 120;
		quantityD = 1;
		$('#fldQuantityD').val(1);
		coresD = 12;
		updateStatsD();
	});
	
	//Event handler for Panel D Model 160.
	$('#btnModel160D').click(function(){
		
		//Panel Title
		$('#panelDTitle').hide();
		$('#panelDTitle60').hide();
		$('#panelDTitle120').hide();
		$('#panelDTitle160').show();
		$('#panelDTitle200').hide();
		
		//Model Validation
		clearMemoryD();
		clearDiskD();
		clearQuantityD();
		if(modelD == 60){
			clear60();
		}
		else if(modelD == 120){
			clear120();
		}
		else if(modelD == 200){
			clear200();
		}
		$('#btnModel160A').attr('disabled', true);
		$('#btnModel160B').attr('disabled', true);
		$('#btnModel160C').attr('disabled', true);
		$('#btnModel160D').attr('disabled', false);
		
		//Memory Validation
		$('#btnMemory64D').attr('disabled', true);
		$('#btnMemory128D').attr('disabled', true);
		$('#btnMemory192D').attr('disabled', true);
		$('#btnMemory256D').attr('disabled', false);
		$('#btnMemory512D').attr('disabled', false);
		
		//Disk Validation
		$('#btnDisk1D').attr('disabled', true);
		$('#btnDisk2D').attr('disabled', true);
		$('#btnDisk3D').attr('disabled', true);
		$('#btnDisk4D').attr('disabled', false);
		$('#btnDisk5D').attr('disabled', true);
		$('#btnDisk6D').attr('disabled', false);
		
		$('#divMemoryD').slideDown();
		modelD = 160;
		quantityD = 1;
		$('#fldQuantityD').val(1);
		coresD = 16;
		updateStatsD();
	});
	
	//Event handler for Panel D Model 200.
	$('#btnModel200D').click(function(){
		
		//Panel Title
		$('#panelDTitle').hide();
		$('#panelDTitle60').hide();
		$('#panelDTitle120').hide();
		$('#panelDTitle160').hide();
		$('#panelDTitle200').show();
		
		//Model Validation
		clearMemoryD();
		clearDiskD();
		clearQuantityD();
		if(modelD == 60){
			clear60();
		}
		else if(modelD == 120){
			clear120();
		}
		else if(modelD == 160){
			clear160();
		}
		$('#btnModel200A').attr('disabled', true);
		$('#btnModel200B').attr('disabled', true);
		$('#btnModel200C').attr('disabled', true);
		$('#btnModel200D').attr('disabled', false);
		
		//Memory Validation
		$('#btnMemory64D').attr('disabled', true);
		$('#btnMemory128D').attr('disabled', true);
		$('#btnMemory192D').attr('disabled', true);
		$('#btnMemory256D').attr('disabled', false);
		$('#btnMemory512D').attr('disabled', false);
		
		//Disk Validation
		$('#btnDisk1D').attr('disabled', true);
		$('#btnDisk2D').attr('disabled', true);
		$('#btnDisk3D').attr('disabled', true);
		$('#btnDisk4D').attr('disabled', false);
		$('#btnDisk5D').attr('disabled', true);
		$('#btnDisk6D').attr('disabled', false);
		
		$('#divMemoryD').slideDown();
		modelD = 200;
		quantityD = 1;
		$('#fldQuantityD').val(1);
		coresD = 20;
		updateStatsD();
	});
	
	//Event handler for Panel A 64GB RAM
	$('#btnMemory64A').click(function(){
		$('#divDiskA').slideDown();
		memoryA = 64;
		updateStatsA();
	});
	
	//Event handler for Panel A 128GB RAM
	$('#btnMemory128A').click(function(){
		$('#divDiskA').slideDown();
		memoryA = 128;
		updateStatsA();
	});
	
	//Event handler for Panel A 192GB RAM
	$('#btnMemory192A').click(function(){
		$('#divDiskA').slideDown();
		memoryA = 192;
		updateStatsA();
	});
	
	//Event handler for Panel A 256GB RAM
	$('#btnMemory256A').click(function(){
		$('#divDiskA').slideDown();
		memoryA = 256;
		updateStatsA();
	});
	
	//Event handler for Panel A 512GB RAM
	$('#btnMemory512A').click(function(){
		$('#divDiskA').slideDown();
		memoryA = 512;
		updateStatsA();
	});
	
	//Event handler for Panel B 64GB RAM
	$('#btnMemory64B').click(function(){
		$('#divDiskB').slideDown();
		memoryB = 64;
		updateStatsB();
	});
	
	//Event handler for Panel B 128GB RAM
	$('#btnMemory128B').click(function(){
		$('#divDiskB').slideDown();
		memoryB = 128;
		updateStatsB();
	});
	
	//Event handler for Panel B 192GB RAM
	$('#btnMemory192B').click(function(){
		$('#divDiskB').slideDown();
		memoryB = 192;
		updateStatsB();
	});
	
	//Event handler for Panel B 256GB RAM
	$('#btnMemory256B').click(function(){
		$('#divDiskB').slideDown();
		memoryB = 256;
		updateStatsB();
	});
	
	//Event handler for Panel B 512GB RAM
	$('#btnMemory512B').click(function(){
		$('#divDiskB').slideDown();
		memoryB = 512;
		updateStatsB();
	});
	
	//Event handler for Panel C 64GB RAM
	$('#btnMemory64C').click(function(){
		$('#divDiskC').slideDown();
		memoryC = 64;
		updateStatsC();
	});
	
	//Event handler for Panel C 128GB RAM
	$('#btnMemory128C').click(function(){
		$('#divDiskC').slideDown();
		memoryC = 128;
		updateStatsC();
	});
	
	//Event handler for Panel C 192GB RAM
	$('#btnMemory192C').click(function(){
		$('#divDiskC').slideDown();
		memoryC = 192;
		updateStatsC();
	});
	
	//Event handler for Panel C 256GB RAM
	$('#btnMemory256C').click(function(){
		$('#divDiskC').slideDown();
		memoryC = 256;
		updateStatsC();
	});
	
	//Event handler for Panel C 512GB RAM
	$('#btnMemory512C').click(function(){
		$('#divDiskC').slideDown();
		memoryC = 512;
		updateStatsC();
	});
	
	//Event handler for Panel D 64GB RAM
	$('#btnMemory64D').click(function(){
		$('#divDiskD').slideDown();
		memoryD = 64;
		updateStatsD();
	});
	
	//Event handler for Panel D 128GB RAM
	$('#btnMemory128D').click(function(){
		$('#divDiskD').slideDown();
		memoryD = 128;
		updateStatsD();
	});
	
	//Event handler for Panel D 192GB RAM
	$('#btnMemory192D').click(function(){
		$('#divDiskD').slideDown();
		memoryD = 192;
		updateStatsD();
	});
	
	//Event handler for Panel D 256GB RAM
	$('#btnMemory256D').click(function(){
		$('#divDiskD').slideDown();
		memoryD = 256;
		updateStatsD();
	});
	
	//Event handler for Panel D 512GB RAM
	$('#btnMemory512D').click(function(){
		$('#divDiskD').slideDown();
		memoryD = 512;
		updateStatsD();
	});
	
	//Event handler for Panel A Disk Pack 1
	$('#btnDisk1A').click(function(){
		$('#divQuantityA').slideDown();
		ssdCountA = 1;
		ssdCapA = 200;
		hddCountA = 3;
		hddCapA = 1200;
		updateStatsA();
	});
	
	//Event handler for Panel A Disk Pack 2
	$('#btnDisk2A').click(function(){
		$('#divQuantityA').slideDown();
		ssdCountA = 1;
		ssdCapA = 400;
		hddCountA = 3;
		hddCapA = 1200;
		updateStatsA();
	});
	
	//Event handler for Panel A Disk Pack 3
	$('#btnDisk3A').click(function(){
		$('#divQuantityA').slideDown();
		ssdCountA = 1;
		ssdCapA = 200;
		hddCountA = 4;
		hddCapA = 1200;
		updateStatsA();
		updateStatsA();
	});
	
	//Event handler for Panel A Disk Pack 4
	$('#btnDisk4A').click(function(){
		$('#divQuantityA').slideDown();
		ssdCountA = 1;
		ssdCapA = 400;
		hddCountA = 4;
		hddCapA = 1200;
		updateStatsA();
	});
	
	//Event handler for Panel A Disk Pack 5
	$('#btnDisk5A').click(function(){
		$('#divQuantityA').slideDown();
		ssdCountA = 1;
		ssdCapA = 200;
		hddCountA = 5;
		hddCapA = 1200;
		updateStatsA();
	});
	
	//Event handler for Panel A Disk Pack 6
	$('#btnDisk6A').click(function(){
		$('#divQuantityA').slideDown();
		ssdCountA = 1;
		ssdCapA = 800;
		hddCountA = 5;
		hddCapA = 1200;
		updateStatsA();
	});
	
	//Event handler for Panel B Disk Pack 1
	$('#btnDisk1B').click(function(){
		$('#divQuantityB').slideDown();
		ssdCountB = 1;
		ssdCapB = 200;
		hddCountB = 3;
		hddCapB = 1200;
		updateStatsB();
	});
	
	//Event handler for Panel B Disk Pack 2
	$('#btnDisk2B').click(function(){
		$('#divQuantityB').slideDown();
		ssdCountB = 1;
		ssdCapB = 400;
		hddCountB = 3;
		hddCapB = 1200;
		updateStatsB();
	});
	
	//Event handler for Panel B Disk Pack 3
	$('#btnDisk3B').click(function(){
		$('#divQuantityB').slideDown();
		ssdCountB = 1;
		ssdCapB = 200;
		hddCountB = 4;
		hddCapB = 1200;
		updateStatsB();
	});
	
	//Event handler for Panel B Disk Pack 4
	$('#btnDisk4B').click(function(){
		$('#divQuantityB').slideDown();
		ssdCountB = 1;
		ssdCapB = 400;
		hddCountB = 4;
		hddCapB = 1200;
		updateStatsB();
	});
	
	//Event handler for Panel B Disk Pack 5
	$('#btnDisk5B').click(function(){
		$('#divQuantityB').slideDown();
		ssdCountB = 1;
		ssdCapB = 200;
		hddCountB = 5;
		hddCapB = 1200;
		updateStatsB();
	});
	
	//Event handler for Panel B Disk Pack 6
	$('#btnDisk6B').click(function(){
		$('#divQuantityB').slideDown();
		ssdCountB = 1;
		ssdCapB = 800;
		hddCountB = 5;
		hddCapB = 1200;
		updateStatsB();
	});
	
	//Event handler for Panel C Disk Pack 1
	$('#btnDisk1C').click(function(){
		$('#divQuantityC').slideDown();
		ssdCountC = 1;
		ssdCapC = 200;
		hddCountC = 3;
		hddCapC = 1200;
		updateStatsC();
	});
	
	//Event handler for Panel C Disk Pack 2
	$('#btnDisk2C').click(function(){
		$('#divQuantityC').slideDown();
		ssdCountC = 1;
		ssdCapC = 400;
		hddCountC = 3;
		hddCapC = 1200;
		updateStatsC();
	});
	
	//Event handler for Panel C Disk Pack 3
	$('#btnDisk3C').click(function(){
		$('#divQuantityC').slideDown();
		ssdCountC = 1;
		ssdCapC = 200;
		hddCountC = 4;
		hddCapC = 1200;
		updateStatsC();
	});
	
	//Event handler for Panel C Disk Pack 4
	$('#btnDisk4C').click(function(){
		$('#divQuantityC').slideDown();
		ssdCountC = 1;
		ssdCapC = 400;
		hddCountC = 4;
		hddCapC = 1200;
		updateStatsC();
	});
	
	//Event handler for Panel C Disk Pack 5
	$('#btnDisk5C').click(function(){
		$('#divQuantityC').slideDown();
		ssdCountC = 1;
		ssdCapC = 200;
		hddCountC = 5;
		hddCapC = 1200;
		updateStatsC();
	});
	
	//Event handler for Panel C Disk Pack 6
	$('#btnDisk6C').click(function(){
		$('#divQuantityC').slideDown();
		ssdCountC = 1;
		ssdCapC = 800;
		hddCountC = 5;
		hddCapC = 1200;
		updateStatsC();
	});
	
	//Event handler for Panel D Disk Pack 1
	$('#btnDisk1D').click(function(){
		$('#divQuantityD').slideDown();
		ssdCountD = 1;
		ssdCapD = 200;
		hddCountD = 3;
		hddCapD = 1200;
		updateStatsD();
	});
	
	//Event handler for Panel D Disk Pack 2
	$('#btnDisk2D').click(function(){
		$('#divQuantityD').slideDown();
		ssdCountD = 1;
		ssdCapD = 400;
		hddCountD = 3;
		hddCapD = 1200;
		updateStatsD();
	});
	
	//Event handler for Panel D Disk Pack 3
	$('#btnDisk3D').click(function(){
		$('#divQuantityD').slideDown();
		ssdCountD = 1;
		ssdCapD = 200;
		hddCountD = 4;
		hddCapD = 1200;
		updateStatsD();
	});
	
	//Event handler for Panel D Disk Pack 4
	$('#btnDisk4D').click(function(){
		$('#divQuantityD').slideDown();
		ssdCountD = 1;
		ssdCapD = 400;
		hddCountD = 4;
		hddCapD = 1200;
		updateStatsD();
	});
	
	//Event handler for Panel D Disk Pack 5
	$('#btnDisk5D').click(function(){
		$('#divQuantityD').slideDown();
		ssdCountD = 1;
		ssdCapD = 200;
		hddCountD = 5;
		hddCapD = 1200;
		updateStatsD();
	});
	
	//Event handler for Panel D Disk Pack 6
	$('#btnDisk6D').click(function(){
		$('#divQuantityD').slideDown();
		ssdCountD = 1;
		ssdCapD = 800;
		hddCountD = 5;
		hddCapD = 1200;
		updateStatsD();
	});
	
	//Event handler for Panel A Quantity
	$('#fldQuantityA').bind('mouseup keyup', function(){
		var check = Number($('#fldQuantityA').val())+ Number(quantityB) + Number(quantityC) + Number(quantityD);
		if($('#fldQuantityA').val() < 0 || $('#fldQuantityA').val() > 16) {
			alert('A cluster may only contain 16 appliances.');
			$('#fldQuantityA').val(0);
		}
		else if(check < 0 || check > 16) {
			alert('A cluster may only contain 16 appliances.');
			$('#fldQuantityA').val(0);
		}
		else{
			quantityA = Number($('#fldQuantityA').val());
			updateStatsA();
		}
	});
	
	//Event handler for Panel B Quantity
	$('#fldQuantityB').bind('mouseup keyup', function(){
		var check = Number($('#fldQuantityB').val())+ Number(quantityA) + Number(quantityC) + Number(quantityD);
		if($('#fldQuantityB').val() < 0 || $('#fldQuantityB').val() > 16) {
			alert('A cluster may only contain 16 appliances.');
			$('#fldQuantityB').val(0);
		}
		else if(check < 0 || check > 16) {
			alert('A cluster may only contain 16 appliances.');
			$('#fldQuantityB').val(0);
		}
		else{
			quantityB = Number($('#fldQuantityB').val());
			updateStatsB();
		}
	});
	
	//Event handler for Panel C Quantity
	$('#fldQuantityC').bind('mouseup keyup', function(){
		var check = Number($('#fldQuantityC').val())+ Number(quantityA) + Number(quantityB) + Number(quantityD);
		if($('#fldQuantityC').val() < 0 || $('#fldQuantityC').val() > 16) {
			alert('A cluster may only contain 16 appliances.');
			$('#fldQuantityC').val(0);
		}
		else if(check < 0 || check > 16) {
			alert('A cluster may only contain 16 appliances.');
			$('#fldQuantityC').val(0);
		}
		else{
			quantityC = Number($('#fldQuantityC').val());
			updateStatsC();
		}
	});
	
	//Event handler for Panel D Quantity
	$('#fldQuantityD').bind('mouseup keyup', function(){
		var check = Number($('#fldQuantityD').val())+ Number(quantityA) + Number(quantityB) + Number(quantityC);
		if($('#fldQuantityD').val() < 0 || $('#fldQuantityD').val() > 16) {
			alert('A cluster may only contain 16 appliances.');
			$('#fldQuantityD').val(0);
		}
		else if(check < 0 || check > 16) {
			alert('A cluster may only contain 16 appliances.');
			$('#fldQuantityD').val(0);
		}
		else{
			quantityD = Number($('#fldQuantityD').val());
			updateStatsD();
		}
	});
	
	$('#btnStartHelp').click(function(){
		helped = 0;
		clearA();clearB();clearC();clearD();clearCluster();clearProtection();
		$('#divProtection').slideUp();
		$('#divConfiguration').slideUp();
		$('#divPanel1').slideUp();
		$('#divPanel2').slideUp();
		$('#divPanel3').slideUp();
		$('#divPanel4').slideUp();
		$('#helpSpacer1').slideDown();
		$('#help1').slideDown();
		$('#btnStartHelp').slideUp();
	});
	
	$('#btnHelped').click(function(){
		$('#help6').slideUp();
		$('#minusPanel1').show();
		$('#plusPanel2').show();
		$('#btnStartHelp').slideDown();
		$('#help1').hide();
		$('#help2').hide();
		$('#help3').hide();
		$('#help4').hide();
		$('#help5').hide();
		$('#help6').hide();
		clearA();clearB();clearC();clearD();clearCluster();clearProtection();
		$('#divProtection').slideUp();
		$('#divConfiguration').slideUp();
		$('#divPanel1').slideUp();
		$('#divPanel2').slideUp();
		$('#divPanel3').slideUp();
		$('#divPanel4').slideUp();
		helped = 1;
	});

	$('#downArrow').click(function(){
		$('#VCSA').slideDown();
		$('#logInsight').slideDown();
		$('#railManager').slideDown();
		$('#railExtension').slideDown();
		$('#ESRS').slideDown();
		$('#VDP').slideDown();
		$('#RP4VMs').slideDown();
		$('#cloudArray').slideDown();
		$('#downArrow').hide();
		$('#upArrow').show();
	});

	$('#upArrow').click(function(){
		$('#VCSA').slideUp();
		$('#logInsight').slideUp();
		$('#railManager').slideUp();
		$('#railExtension').slideUp();
		$('#ESRS').slideUp();
		$('#VDP').slideUp();
		$('#RP4VMs').slideUp();
		$('#cloudArray').slideUp();
		$('#downArrow').show();
		$('#upArrow').hide();
	});

	$('#ESRSMinus').click(function(){
		coresESRS = 0;
		memoryESRS = 0;
		storageESRS = 0;
		$('#ESRS').removeClass("danger");
		$('#ESRSMinus').hide();
		$('#ESRSPlus').show();
		updateStatsESRS();
	});

	$('#ESRSPlus').click(function(){
		coresESRS = 1;
		memoryESRS = 4;
		storageESRS = 68;
		$('#ESRS').addClass("danger");
		$('#ESRSMinus').show();
		$('#ESRSPlus').hide();
		updateStatsESRS();
	});

	$('#VDPMinus').click(function(){
		coresVDP = 0;
		memoryVDP = 0;
		storageVDP = 0;
		$('#VDP').removeClass("danger");
		$('#VDPMinus').hide();
		$('#VDPPlus').show();
		updateStatsVDP();
	});

	$('#VDPPlus').click(function(){
		coresVDP = 4;
		memoryVDP = 4;
		storageVDP = 104;
		$('#VDP').addClass("danger");
		$('#VDPMinus').show();
		$('#VDPPlus').hide();
		updateStatsVDP();
	});

	$('#RPVMMinus').click(function(){
		coresRPVM = 0;
		memoryRPVM = 0;
		storageRPVM = 0;
		$('#RP4VMs').removeClass("danger");
		$('#RPVMMinus').hide();
		$('#RPVMPlus').show();
		updateStatsRPVM();
	});

	$('#RPVMPlus').click(function(){
		coresRPVM = 2;
		memoryRPVM = 4;
		storageRPVM = 104;
		$('#RP4VMs').addClass("danger");
		$('#RPVMMinus').show();
		$('#RPVMPlus').hide();
		updateStatsRPVM();
	});
	
	$('#cloudMinus').click(function(){
		coresCloud = 0;
		memoryCloud = 0;
		storageCloud = 0;
		$('#cloudArray').removeClass("danger");
		$('#cloudMinus').hide();
		$('#cloudPlus').show();
		updateStatsCloudArray();
	});

	$('#cloudPlus').click(function(){
		coresCloud = 4;
		memoryCloud = 4;
		storageCloud = 61;
		$('#cloudArray').addClass("danger");
		$('#cloudMinus').show();
		$('#cloudPlus').hide();
		updateStatsCloudArray();
	});

	$('#btnDisclaimer').click(function(){
		$('#disclaimer').slideUp();
	});

	alert("I was informed this morning that protection overhead was not being calculated. I will fix this after the Quantum Leap event.");
});
