document.addEventListener('DOMContentLoaded', function() {
  // Application data structure
  let appData = {
    states: {
      "delhi": {
        name: "Delhi",
        population_current: 32900000,
        population_projected: 37500000,
        youth_percentage: 35.2,
        internet_penetration: 75.0,
        smartphone_penetration: 82.0,
        digital_literacy: 72.0,
        per_capita_income: 462000,
        government_health_spending: 8500,
        health_infrastructure_score: 8.2,
        abdm_adoption_rate: 45.0,
        health_app_usage: 68.0,
        rural_urban_ratio: 3.0,
        literacy_rate: 86.2,
        climate_vulnerability_score: 6.5,
        market_attractiveness_score: 7.25,
        priority_category: "High Priority"
      },
      "chandigarh": {
        name: "Chandigarh",
        population_current: 1180000,
        population_projected: 1350000,
        youth_percentage: 32.8,
        internet_penetration: 68.0,
        smartphone_penetration: 78.0,
        digital_literacy: 65.0,
        per_capita_income: 318000,
        government_health_spending: 7200,
        health_infrastructure_score: 7.8,
        abdm_adoption_rate: 38.0,
        health_app_usage: 62.0,
        rural_urban_ratio: 8.0,
        literacy_rate: 86.4,
        climate_vulnerability_score: 5.8,
        market_attractiveness_score: 6.42,
        priority_category: "Medium Priority"
      },
      "maharashtra": {
        name: "Maharashtra",
        population_current: 112400000,
        population_projected: 130200000,
        youth_percentage: 28.5,
        internet_penetration: 58.0,
        smartphone_penetration: 68.0,
        digital_literacy: 55.0,
        per_capita_income: 215000,
        government_health_spending: 4800,
        health_infrastructure_score: 6.5,
        abdm_adoption_rate: 32.0,
        health_app_usage: 58.0,
        rural_urban_ratio: 45.0,
        literacy_rate: 82.3,
        climate_vulnerability_score: 9.0,
        market_attractiveness_score: 5.85,
        priority_category: "Medium Priority"
      }
    },
    parameters: {
      "population_current": {
        name: "Current Population",
        type: "numeric",
        unit: "people",
        validation: {"min": 1000, "max": 300000000},
        category: "Demographics"
      },
      "population_projected": {
        name: "Projected Population (2030)",
        type: "numeric",
        unit: "people",
        validation: {"min": 1000, "max": 400000000},
        category: "Demographics"
      },
      "youth_percentage": {
        name: "Youth Percentage (18-30)",
        type: "percentage",
        unit: "%",
        validation: {"min": 0, "max": 100},
        category: "Demographics"
      },
      "internet_penetration": {
        name: "Internet Penetration",
        type: "percentage",
        unit: "%",
        validation: {"min": 0, "max": 100},
        category: "Digital Infrastructure"
      },
      "smartphone_penetration": {
        name: "Smartphone Penetration",
        type: "percentage",
        unit: "%",
        validation: {"min": 0, "max": 100},
        category: "Digital Infrastructure"
      },
      "digital_literacy": {
        name: "Digital Literacy Rate",
        type: "percentage",
        unit: "%",
        validation: {"min": 0, "max": 100},
        category: "Digital Infrastructure"
      },
      "per_capita_income": {
        name: "Per Capita Income",
        type: "currency",
        unit: "₹",
        validation: {"min": 10000, "max": 1000000},
        category: "Economic Indicators"
      },
      "government_health_spending": {
        name: "Government Health Spending per Capita",
        type: "currency",
        unit: "₹",
        validation: {"min": 1000, "max": 50000},
        category: "Economic Indicators"
      },
      "health_infrastructure_score": {
        name: "Health Infrastructure Score",
        type: "score",
        unit: "/10",
        validation: {"min": 0, "max": 10},
        category: "Health System"
      },
      "abdm_adoption_rate": {
        name: "ABDM Adoption Rate",
        type: "percentage",
        unit: "%",
        validation: {"min": 0, "max": 100},
        category: "Health System"
      },
      "health_app_usage": {
        name: "Health App Usage",
        type: "percentage",
        unit: "%",
        validation: {"min": 0, "max": 100},
        category: "Health System"
      },
      "rural_urban_ratio": {
        name: "Rural/Urban Ratio",
        type: "numeric",
        unit: ":1",
        validation: {"min": 0.1, "max": 20},
        category: "Demographics"
      },
      "literacy_rate": {
        name: "Literacy Rate",
        type: "percentage",
        unit: "%",
        validation: {"min": 0, "max": 100},
        category: "Demographics"
      },
      "climate_vulnerability_score": {
        name: "Climate Vulnerability Score",
        type: "score",
        unit: "/10",
        validation: {"min": 0, "max": 10},
        category: "Risk Factors"
      },
      "market_attractiveness_score": {
        name: "Market Attractiveness Score",
        type: "score",
        unit: "/10",
        validation: {"min": 0, "max": 10},
        category: "Market Analysis"
      }
    },
    users: {
      "admin": {
        username: "admin",
        password: "admin123",
        role: "Super Admin",
        name: "System Administrator",
        email: "admin@hallahealth.com",
        last_login: "2025-01-24T11:30:00Z"
      },
      "datamanager": {
        username: "datamanager",
        password: "data123",
        role: "Data Manager",
        name: "Data Manager",
        email: "data@hallahealth.com",
        last_login: "2025-01-24T10:15:00Z"
      },
      "editor": {
        username: "editor",
        password: "edit123",
        role: "Content Editor",
        name: "Content Editor",
        email: "editor@hallahealth.com",
        last_login: "2025-01-24T09:45:00Z"
      }
    },
    strategic_insights: {
      "market_entry_strategy": {
        title: "Market Entry Strategy for Halla Health",
        content: "Based on comprehensive analysis of Indian states, we recommend a three-phase market entry approach. Phase 1 focuses on high digital penetration urban markets like Delhi and Chandigarh. Phase 2 expands to tier-2 cities with growing digital infrastructure. Phase 3 targets rural markets with government partnership programs.",
        last_updated: "2025-01-24",
        updated_by: "editor",
        category: "Strategy"
      },
      "phase_1_recommendations": {
        title: "Phase 1: Urban Market Validation",
        content: "Target Delhi, Chandigarh, and metro areas of Maharashtra for initial deployment. Focus on young demographics (18-30) with high smartphone penetration. Leverage ABDM integration for seamless health record access. Partner with corporate wellness programs.",
        last_updated: "2025-01-24",
        updated_by: "editor",
        category: "Implementation"
      },
      "climate_health_nexus": {
        title: "Climate-Health Integration Opportunity",
        content: "States with high climate vulnerability scores present unique opportunities for climate-integrated health solutions. Maharashtra and eastern states show increasing demand for environmental health monitoring and adaptive health strategies.",
        last_updated: "2025-01-24",
        updated_by: "datamanager",
        category: "Market Analysis"
      }
    },
    audit_log: [],
    last_updated: new Date().toISOString()
  };

  // Authentication state
  let isAuthenticated = false;
  let currentUser = null;

  // Current editing states
  let editingState = null;
  let editingParameter = null;
  let editingInsight = null;
  let editingUser = null;

  // Chart instances
  let priorityChart = null;
  let parameterChart = null;

  // Chart colors
  const chartColors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'];

  // Role permissions
  const rolePermissions = {
    'Super Admin': ['create', 'read', 'update', 'delete', 'manage_users', 'manage_system'],
    'Data Manager': ['create', 'read', 'update', 'delete', 'bulk_operations'],
    'Content Editor': ['create', 'read', 'update', 'manage_insights'],
    'Viewer': ['read']
  };

  // Initialize application
  function init() {
    console.log('Initializing Halla Health CMS...');
    loadStoredData();
    setupEventListeners();
    checkAuthState();
  }

  // Data Management
  function loadStoredData() {
    try {
      const stored = localStorage.getItem('hallaHealthCMSData');
      if (stored) {
        const parsedData = JSON.parse(stored);
        appData = { ...appData, ...parsedData };
      }
    } catch (error) {
      console.error('Error loading stored data:', error);
    }
    saveData();
  }

  function saveData() {
    try {
      appData.last_updated = new Date().toISOString();
      localStorage.setItem('hallaHealthCMSData', JSON.stringify(appData));
    } catch (error) {
      console.error('Error saving data:', error);
      showToast('Error saving data', 'error');
    }
  }

  function addAuditLog(action, entity, details, entityId = null) {
    const logEntry = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      user: currentUser?.username || 'system',
      action,
      entity,
      entityId,
      details,
    };
    
    appData.audit_log.unshift(logEntry);
    
    // Keep only last 1000 entries
    if (appData.audit_log.length > 1000) {
      appData.audit_log = appData.audit_log.slice(0, 1000);
    }
    
    saveData();
  }

  // Event Listeners Setup
  function setupEventListeners() {
    setupAuthListeners();
    setupNavigationListeners();
    setupModalListeners();
    setupFormListeners();
    setupActionListeners();
    setupTabListeners();
    setupSearchListeners();
  }

  function setupAuthListeners() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', handleLogin);
    }

    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', handleLogout);
    }
  }

  function setupNavigationListeners() {
    document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const section = item.dataset.section;
        if (section && hasPermission('read')) {
          switchSection(section);
          updateActiveNavItem(item);
        }
      });
    });
  }

  function setupModalListeners() {
    // Modal close buttons
    document.querySelectorAll('.modal-close, .modal-cancel').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const modal = e.target.closest('.modal');
        if (modal) {
          hideModal(modal.id);
        }
      });
    });

    // Modal backdrop clicks
    document.querySelectorAll('.modal').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          hideModal(modal.id);
        }
      });
    });
  }

  function setupFormListeners() {
    // State form
    const stateForm = document.getElementById('stateForm');
    if (stateForm) {
      stateForm.addEventListener('submit', handleStateSave);
    }

    // Parameter form
    const parameterForm = document.getElementById('parameterForm');
    if (parameterForm) {
      parameterForm.addEventListener('submit', handleParameterSave);
    }

    // Insight form
    const insightForm = document.getElementById('insightForm');
    if (insightForm) {
      insightForm.addEventListener('submit', handleInsightSave);
    }

    // User form
    const userForm = document.getElementById('userForm');
    if (userForm) {
      userForm.addEventListener('submit', handleUserSave);
    }
  }

  function setupActionListeners() {
    // Dashboard actions
    const refreshBtn = document.getElementById('refreshBtn');
    if (refreshBtn) {
      refreshBtn.addEventListener('click', () => {
        loadDashboard();
        showToast('Dashboard refreshed', 'success');
      });
    }

    const syncBtn = document.getElementById('syncBtn');
    if (syncBtn) {
      syncBtn.addEventListener('click', () => {
        simulateDashboardSync();
      });
    }

    // State management actions
    const addStateBtn = document.getElementById('addStateBtn');
    if (addStateBtn) {
      addStateBtn.addEventListener('click', () => {
        if (hasPermission('create')) {
          editingState = null;
          showStateModal();
        }
      });
    }

    const exportStatesBtn = document.getElementById('exportStatesBtn');
    if (exportStatesBtn) {
      exportStatesBtn.addEventListener('click', exportStates);
    }

    const importStatesBtn = document.getElementById('importStatesBtn');
    if (importStatesBtn) {
      importStatesBtn.addEventListener('click', () => {
        document.getElementById('fileImportInput').click();
      });
    }

    // Parameter management actions
    const addParameterBtn = document.getElementById('addParameterBtn');
    if (addParameterBtn) {
      addParameterBtn.addEventListener('click', () => {
        if (hasPermission('create')) {
          editingParameter = null;
          showParameterModal();
        }
      });
    }

    // Insight management actions
    const addInsightBtn = document.getElementById('addInsightBtn');
    if (addInsightBtn) {
      addInsightBtn.addEventListener('click', () => {
        if (hasPermission('create')) {
          editingInsight = null;
          showInsightModal();
        }
      });
    }

    // User management actions
    const addUserBtn = document.getElementById('addUserBtn');
    if (addUserBtn) {
      addUserBtn.addEventListener('click', () => {
        if (hasPermission('manage_users')) {
          editingUser = null;
          showUserModal();
        }
      });
    }

    // View toggle
    const gridViewBtn = document.getElementById('gridViewBtn');
    const tableViewBtn = document.getElementById('tableViewBtn');
    
    if (gridViewBtn) {
      gridViewBtn.addEventListener('click', () => {
        toggleView('grid');
        gridViewBtn.classList.add('active');
        tableViewBtn.classList.remove('active');
      });
    }

    if (tableViewBtn) {
      tableViewBtn.addEventListener('click', () => {
        toggleView('table');
        tableViewBtn.classList.add('active');
        gridViewBtn.classList.remove('active');
      });
    }

    // Settings actions
    setupSettingsListeners();

    // Bulk operations
    setupBulkOperationsListeners();

    // File import
    const fileImportInput = document.getElementById('fileImportInput');
    if (fileImportInput) {
      fileImportInput.addEventListener('change', handleFileImport);
    }

    // Preview buttons
    const previewState = document.getElementById('previewState');
    if (previewState) {
      previewState.addEventListener('click', handleStatePreview);
    }

    const previewInsight = document.getElementById('previewInsight');
    if (previewInsight) {
      previewInsight.addEventListener('click', handleInsightPreview);
    }
  }

  function setupTabListeners() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const tabName = btn.dataset.tab;
        switchTab(tabName);
        
        // Update active tab button
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  }

  function setupSearchListeners() {
    const stateSearch = document.getElementById('stateSearch');
    if (stateSearch) {
      stateSearch.addEventListener('input', debounce(renderStates, 300));
    }

    const priorityFilter = document.getElementById('priorityFilter');
    if (priorityFilter) {
      priorityFilter.addEventListener('change', renderStates);
    }

    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
      categoryFilter.addEventListener('change', renderStates);
    }

    const parameterSearch = document.getElementById('parameterSearch');
    if (parameterSearch) {
      parameterSearch.addEventListener('input', debounce(renderParameters, 300));
    }

    const parameterCategoryFilter = document.getElementById('parameterCategoryFilter');
    if (parameterCategoryFilter) {
      parameterCategoryFilter.addEventListener('change', renderParameters);
    }

    const insightSearch = document.getElementById('insightSearch');
    if (insightSearch) {
      insightSearch.addEventListener('input', debounce(renderInsights, 300));
    }

    const insightStatusFilter = document.getElementById('insightStatusFilter');
    if (insightStatusFilter) {
      insightStatusFilter.addEventListener('change', renderInsights);
    }

    const insightCategoryFilter = document.getElementById('insightCategoryFilter');
    if (insightCategoryFilter) {
      insightCategoryFilter.addEventListener('change', renderInsights);
    }

    const auditSearch = document.getElementById('auditSearch');
    if (auditSearch) {
      auditSearch.addEventListener('input', debounce(renderAuditLog, 300));
    }

    const auditActionFilter = document.getElementById('auditActionFilter');
    if (auditActionFilter) {
      auditActionFilter.addEventListener('change', renderAuditLog);
    }

    const auditDateFilter = document.getElementById('auditDateFilter');
    if (auditDateFilter) {
      auditDateFilter.addEventListener('change', renderAuditLog);
    }
  }

  function setupSettingsListeners() {
    const backupBtn = document.getElementById('backupBtn');
    if (backupBtn) {
      backupBtn.addEventListener('click', createBackup);
    }

    const restoreBtn = document.getElementById('restoreBtn');
    if (restoreBtn) {
      restoreBtn.addEventListener('click', () => {
        document.getElementById('fileImportInput').click();
      });
    }

    const validateDataBtn = document.getElementById('validateDataBtn');
    if (validateDataBtn) {
      validateDataBtn.addEventListener('click', validateAllData);
    }

    const testSyncBtn = document.getElementById('testSyncBtn');
    if (testSyncBtn) {
      testSyncBtn.addEventListener('click', testDashboardConnection);
    }

    const systemInfoBtn = document.getElementById('systemInfoBtn');
    if (systemInfoBtn) {
      systemInfoBtn.addEventListener('click', showSystemInfo);
    }
  }

  function setupBulkOperationsListeners() {
    const selectImportFile = document.getElementById('selectImportFile');
    if (selectImportFile) {
      selectImportFile.addEventListener('click', () => {
        const fileInput = document.getElementById('bulkImportFile');
        fileInput.click();
      });
    }

    const bulkImportFile = document.getElementById('bulkImportFile');
    if (bulkImportFile) {
      bulkImportFile.addEventListener('change', handleBulkImportFileSelect);
    }

    const validateImport = document.getElementById('validateImport');
    if (validateImport) {
      validateImport.addEventListener('click', validateBulkImport);
    }

    const executeImport = document.getElementById('executeImport');
    if (executeImport) {
      executeImport.addEventListener('click', executeBulkImport);
    }

    const exportAllStates = document.getElementById('exportAllStates');
    if (exportAllStates) {
      exportAllStates.addEventListener('click', () => {
        const format = document.getElementById('exportFormat').value;
        exportStatesInFormat(format);
      });
    }

    const bulkTemplateBtn = document.getElementById('bulkTemplateBtn');
    if (bulkTemplateBtn) {
      bulkTemplateBtn.addEventListener('click', downloadBulkTemplate);
    }
  }

  // Authentication
  function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    const user = Object.values(appData.users).find(u => 
      u.username === username && u.password === password
    );

    if (user) {
      isAuthenticated = true;
      currentUser = user;
      user.last_login = new Date().toISOString();
      
      showCMSInterface();
      updateUserInfo();
      showToast(`Welcome back, ${user.name}!`, 'success');
      addAuditLog('login', 'user', `User ${username} logged in`);
      saveData();
    } else {
      showToast('Invalid credentials. Please try again.', 'error');
    }
  }

  function handleLogout() {
    addAuditLog('logout', 'user', `User ${currentUser.username} logged out`);
    isAuthenticated = false;
    currentUser = null;
    showLoginModal();
    document.getElementById('loginForm').reset();
    showToast('Logged out successfully', 'success');
  }

  function checkAuthState() {
    if (isAuthenticated && currentUser) {
      showCMSInterface();
      updateUserInfo();
    } else {
      showLoginModal();
    }
  }

  function showLoginModal() {
    document.getElementById('loginModal').classList.remove('hidden');
    document.getElementById('cmsInterface').classList.add('hidden');
  }

  function showCMSInterface() {
    document.getElementById('loginModal').classList.add('hidden');
    document.getElementById('cmsInterface').classList.remove('hidden');
    updateNavVisibility();
    switchSection('dashboard');
  }

  function updateUserInfo() {
    const nameEl = document.getElementById('currentUserName');
    const roleEl = document.getElementById('currentUserRole');
    
    if (nameEl && currentUser) {
      nameEl.textContent = currentUser.name;
    }
    
    if (roleEl && currentUser) {
      roleEl.textContent = currentUser.role;
    }
  }

  function updateNavVisibility() {
    if (!currentUser) return;
    
    document.querySelectorAll('.nav-item[data-role]').forEach(item => {
      const requiredRoles = item.dataset.role.split(',');
      if (requiredRoles.includes(currentUser.role)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

  function hasPermission(action) {
    if (!currentUser) return false;
    const userPermissions = rolePermissions[currentUser.role] || [];
    return userPermissions.includes(action);
  }

  // Navigation
  function updateActiveNavItem(activeItem) {
    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.remove('active');
    });
    activeItem.classList.add('active');
  }

  function switchSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
      section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionName);
    if (targetSection) {
      targetSection.classList.add('active');
    }
    
    // Load section-specific content
    switch(sectionName) {
      case 'dashboard':
        loadDashboard();
        break;
      case 'states':
        loadStates();
        break;
      case 'parameters':
        loadParameters();
        break;
      case 'bulk':
        loadBulkOperations();
        break;
      case 'insights':
        loadInsights();
        break;
      case 'users':
        if (hasPermission('manage_users')) {
          loadUsers();
        }
        break;
      case 'audit':
        loadAuditLog();
        break;
      case 'settings':
        loadSettings();
        break;
    }
  }

  function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => {
      tab.classList.remove('active');
    });
    
    const targetTab = document.getElementById(tabName + 'Tab');
    if (targetTab) {
      targetTab.classList.add('active');
    }
  }

  // Dashboard
  function loadDashboard() {
    updateDashboardStats();
    createCharts();
    loadRecentActivity();
  }

  function updateDashboardStats() {
    const totalStatesEl = document.getElementById('totalStates');
    const totalParametersEl = document.getElementById('totalParameters');
    const totalInsightsEl = document.getElementById('totalInsights');
    const totalUsersEl = document.getElementById('totalUsers');

    if (totalStatesEl) {
      totalStatesEl.textContent = Object.keys(appData.states).length;
    }
    if (totalParametersEl) {
      totalParametersEl.textContent = Object.keys(appData.parameters).length;
    }
    if (totalInsightsEl) {
      totalInsightsEl.textContent = Object.keys(appData.strategic_insights).length;
    }
    if (totalUsersEl) {
      totalUsersEl.textContent = Object.keys(appData.users).length;
    }
  }

  function createCharts() {
    createPriorityChart();
    createParameterChart();
  }

  function createPriorityChart() {
    const ctx = document.getElementById('priorityChart');
    if (!ctx) return;
    
    if (priorityChart) {
      priorityChart.destroy();
    }
    
    const priorityCounts = {};
    Object.values(appData.states).forEach(state => {
      const priority = state.priority_category || 'Unknown';
      priorityCounts[priority] = (priorityCounts[priority] || 0) + 1;
    });
    
    priorityChart = new Chart(ctx.getContext('2d'), {
      type: 'doughnut',
      data: {
        labels: Object.keys(priorityCounts),
        datasets: [{
          data: Object.values(priorityCounts),
          backgroundColor: chartColors.slice(0, Object.keys(priorityCounts).length)
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  }

  function createParameterChart() {
    const ctx = document.getElementById('parameterChart');
    if (!ctx) return;
    
    if (parameterChart) {
      parameterChart.destroy();
    }
    
    const categoryCounts = {};
    Object.values(appData.parameters).forEach(param => {
      const category = param.category || 'Unknown';
      categoryCounts[category] = (categoryCounts[category] || 0) + 1;
    });
    
    parameterChart = new Chart(ctx.getContext('2d'), {
      type: 'bar',
      data: {
        labels: Object.keys(categoryCounts),
        datasets: [{
          label: 'Parameters',
          data: Object.values(categoryCounts),
          backgroundColor: chartColors[0]
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1
            }
          }
        }
      }
    });
  }

  function loadRecentActivity() {
    const container = document.getElementById('recentActivity');
    if (!container) return;

    const recentLogs = appData.audit_log.slice(0, 10);
    
    if (recentLogs.length === 0) {
      container.innerHTML = '<div class="empty-state"><p>No recent activity</p></div>';
      return;
    }
    
    container.innerHTML = recentLogs.map(log => `
      <div class="activity-item">
        <span class="activity-time">${formatTimeAgo(log.timestamp)}</span>
        <span class="activity-desc">${log.details}</span>
      </div>
    `).join('');
  }

  // States Management
  function loadStates() {
    renderStates();
  }

  function renderStates() {
    const currentView = document.querySelector('.view-toggle .btn.active')?.id;
    
    if (currentView === 'tableViewBtn') {
      renderStatesTable();
    } else {
      renderStatesGrid();
    }
  }

  function renderStatesGrid() {
    const searchTerm = document.getElementById('stateSearch')?.value.toLowerCase() || '';
    const priorityFilter = document.getElementById('priorityFilter')?.value || '';
    const categoryFilter = document.getElementById('categoryFilter')?.value || '';
    
    let filteredStates = Object.entries(appData.states).filter(([id, state]) => {
      const matchesSearch = state.name.toLowerCase().includes(searchTerm);
      const matchesPriority = !priorityFilter || state.priority_category === priorityFilter;
      // Category filter could be enhanced to filter by parameter categories
      return matchesSearch && matchesPriority;
    });
    
    const container = document.getElementById('statesGrid');
    if (!container) return;
    
    if (filteredStates.length === 0) {
      container.innerHTML = '<div class="empty-state"><h3>No states found</h3><p>Try adjusting your search or filters</p></div>';
      return;
    }
    
    container.innerHTML = filteredStates.map(([id, state]) => `
      <div class="state-card">
        <div class="state-header">
          <h3 class="state-name">${state.name}</h3>
          <div class="state-actions">
            ${hasPermission('update') ? `<button class="btn btn--outline btn-icon" onclick="editState('${id}')" title="Edit">✏️</button>` : ''}
            ${hasPermission('delete') ? `<button class="btn btn--outline btn-icon" onclick="deleteState('${id}')" title="Delete">🗑️</button>` : ''}
          </div>
        </div>
        <div class="state-metrics">
          <div class="metric-item">
            <span class="metric-label">Population:</span>
            <span class="metric-value">${formatNumber(state.population_current)}</span>
          </div>
          <div class="metric-item">
            <span class="metric-label">Internet:</span>
            <span class="metric-value">${state.internet_penetration}%</span>
          </div>
          <div class="metric-item">
            <span class="metric-label">Market Score:</span>
            <span class="metric-value">${state.market_attractiveness_score}</span>
          </div>
          <div class="metric-item">
            <span class="metric-label">Priority:</span>
            <span class="status-badge priority-${state.priority_category?.toLowerCase().replace(' ', '-')}">${state.priority_category}</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  function renderStatesTable() {
    const searchTerm = document.getElementById('stateSearch')?.value.toLowerCase() || '';
    const priorityFilter = document.getElementById('priorityFilter')?.value || '';
    
    let filteredStates = Object.entries(appData.states).filter(([id, state]) => {
      const matchesSearch = state.name.toLowerCase().includes(searchTerm);
      const matchesPriority = !priorityFilter || state.priority_category === priorityFilter;
      return matchesSearch && matchesPriority;
    });
    
    const tableContainer = document.getElementById('statesTable');
    const headerContainer = document.getElementById('tableHeader');
    const bodyContainer = document.getElementById('tableBody');
    
    if (!tableContainer || !headerContainer || !bodyContainer) return;
    
    // Show table, hide grid
    document.getElementById('statesGrid').classList.add('hidden');
    tableContainer.classList.remove('hidden');
    
    // Create table headers
    const sampleState = Object.values(appData.states)[0];
    if (sampleState) {
      const headers = ['State Name', 'Population', 'Internet %', 'Market Score', 'Priority', 'Actions'];
      headerContainer.innerHTML = `
        <tr>
          ${headers.map(header => `<th>${header}</th>`).join('')}
        </tr>
      `;
      
      // Create table rows
      bodyContainer.innerHTML = filteredStates.map(([id, state]) => `
        <tr>
          <td><strong>${state.name}</strong></td>
          <td>${formatNumber(state.population_current)}</td>
          <td>${state.internet_penetration}%</td>
          <td>${state.market_attractiveness_score}</td>
          <td><span class="status-badge priority-${state.priority_category?.toLowerCase().replace(' ', '-')}">${state.priority_category}</span></td>
          <td>
            ${hasPermission('update') ? `<button class="btn btn--outline btn--sm" onclick="editState('${id}')">Edit</button>` : ''}
            ${hasPermission('delete') ? `<button class="btn btn--outline btn--sm" onclick="deleteState('${id}')">Delete</button>` : ''}
          </td>
        </tr>
      `).join('');
    }
  }

  function toggleView(viewType) {
    if (viewType === 'grid') {
      document.getElementById('statesGrid').classList.remove('hidden');
      document.getElementById('statesTable').classList.add('hidden');
      renderStatesGrid();
    } else {
      renderStatesTable();
    }
  }

  // Global functions for onclick handlers
  window.editState = function(stateId) {
    if (!hasPermission('update')) return;
    editingState = { id: stateId, ...appData.states[stateId] };
    showStateModal();
  };

  window.deleteState = function(stateId) {
    if (!hasPermission('delete')) return;
    showConfirmDialog(`Are you sure you want to delete ${appData.states[stateId].name}?`, () => {
      const stateName = appData.states[stateId].name;
      delete appData.states[stateId];
      saveData();
      renderStates();
      addAuditLog('delete', 'state', `Deleted state: ${stateName}`, stateId);
      showToast('State deleted successfully', 'success');
    });
  };

  window.editParameter = function(paramId) {
    if (!hasPermission('update')) return;
    editingParameter = { id: paramId, ...appData.parameters[paramId] };
    showParameterModal();
  };

  window.deleteParameter = function(paramId) {
    if (!hasPermission('delete')) return;
    showConfirmDialog(`Are you sure you want to delete this parameter?`, () => {
      const paramName = appData.parameters[paramId].name;
      delete appData.parameters[paramId];
      saveData();
      renderParameters();
      addAuditLog('delete', 'parameter', `Deleted parameter: ${paramName}`, paramId);
      showToast('Parameter deleted successfully', 'success');
    });
  };

  window.editInsight = function(insightId) {
    if (!hasPermission('update')) return;
    editingInsight = { id: insightId, ...appData.strategic_insights[insightId] };
    showInsightModal();
  };

  window.deleteInsight = function(insightId) {
    if (!hasPermission('delete')) return;
    showConfirmDialog(`Are you sure you want to delete this insight?`, () => {
      const insightTitle = appData.strategic_insights[insightId].title;
      delete appData.strategic_insights[insightId];
      saveData();
      renderInsights();
      addAuditLog('delete', 'insight', `Deleted insight: ${insightTitle}`, insightId);
      showToast('Insight deleted successfully', 'success');
    });
  };

  window.editUser = function(userId) {
    if (!hasPermission('manage_users')) return;
    editingUser = { id: userId, ...appData.users[userId] };
    showUserModal();
  };

  window.deleteUser = function(userId) {
    if (!hasPermission('manage_users')) return;
    if (userId === currentUser.username) {
      showToast('Cannot delete your own account', 'error');
      return;
    }
    showConfirmDialog(`Are you sure you want to delete this user?`, () => {
      const userName = appData.users[userId].name;
      delete appData.users[userId];
      saveData();
      renderUsers();
      addAuditLog('delete', 'user', `Deleted user: ${userName}`, userId);
      showToast('User deleted successfully', 'success');
    });
  };

  // State Modal Functions
  function showStateModal() {
    const modal = document.getElementById('editStateModal');
    const title = document.getElementById('stateModalTitle');
    
    if (title) {
      title.textContent = editingState ? 'Edit State' : 'Add New State';
    }
    
    if (editingState) {
      populateStateForm(editingState);
    } else {
      clearStateForm();
    }
    
    showModal('editStateModal');
  }

  function populateStateForm(state) {
    const fields = {
      'stateName': state.name,
      'priorityCategory': state.priority_category,
      'populationCurrent': state.population_current,
      'populationProjected': state.population_projected,
      'youthPercentage': state.youth_percentage,
      'ruralUrbanRatio': state.rural_urban_ratio,
      'literacyRate': state.literacy_rate,
      'internetPenetration': state.internet_penetration,
      'smartphonePenetration': state.smartphone_penetration,
      'digitalLiteracy': state.digital_literacy,
      'healthInfrastructureScore': state.health_infrastructure_score,
      'abdmAdoptionRate': state.abdm_adoption_rate,
      'healthAppUsage': state.health_app_usage,
      'perCapitaIncome': state.per_capita_income,
      'governmentHealthSpending': state.government_health_spending,
      'climateVulnerabilityScore': state.climate_vulnerability_score,
      'marketAttractivenessScore': state.market_attractiveness_score
    };
    
    Object.keys(fields).forEach(fieldId => {
      const field = document.getElementById(fieldId);
      if (field && fields[fieldId] !== undefined) {
        field.value = fields[fieldId];
      }
    });
  }

  function clearStateForm() {
    const form = document.getElementById('stateForm');
    if (form) {
      form.reset();
    }
  }

  function handleStateSave(e) {
    e.preventDefault();
    
    if (!hasPermission('create') && !hasPermission('update')) {
      showToast('Insufficient permissions', 'error');
      return;
    }
    
    const formData = collectStateFormData();
    
    if (!validateStateData(formData)) {
      return;
    }
    
    if (editingState) {
      // Update existing state
      const stateId = editingState.id;
      appData.states[stateId] = { ...appData.states[stateId], ...formData };
      addAuditLog('update', 'state', `Updated state: ${formData.name}`, stateId);
      showToast('State updated successfully', 'success');
    } else {
      // Create new state
      const stateId = formData.name.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
      appData.states[stateId] = formData;
      addAuditLog('create', 'state', `Created new state: ${formData.name}`, stateId);
      showToast('State created successfully', 'success');
    }
    
    saveData();
    renderStates();
    hideModal('editStateModal');
  }

  function collectStateFormData() {
    return {
      name: getFieldValue('stateName'),
      priority_category: getFieldValue('priorityCategory'),
      population_current: parseFloat(getFieldValue('populationCurrent')) || 0,
      population_projected: parseFloat(getFieldValue('populationProjected')) || 0,
      youth_percentage: parseFloat(getFieldValue('youthPercentage')) || 0,
      rural_urban_ratio: parseFloat(getFieldValue('ruralUrbanRatio')) || 0,
      literacy_rate: parseFloat(getFieldValue('literacyRate')) || 0,
      internet_penetration: parseFloat(getFieldValue('internetPenetration')) || 0,
      smartphone_penetration: parseFloat(getFieldValue('smartphonePenetration')) || 0,
      digital_literacy: parseFloat(getFieldValue('digitalLiteracy')) || 0,
      health_infrastructure_score: parseFloat(getFieldValue('healthInfrastructureScore')) || 0,
      abdm_adoption_rate: parseFloat(getFieldValue('abdmAdoptionRate')) || 0,
      health_app_usage: parseFloat(getFieldValue('healthAppUsage')) || 0,
      per_capita_income: parseFloat(getFieldValue('perCapitaIncome')) || 0,
      government_health_spending: parseFloat(getFieldValue('governmentHealthSpending')) || 0,
      climate_vulnerability_score: parseFloat(getFieldValue('climateVulnerabilityScore')) || 0,
      market_attractiveness_score: parseFloat(getFieldValue('marketAttractivenessScore')) || 0
    };
  }

  function validateStateData(data) {
    if (!data.name.trim()) {
      showToast('State name is required', 'error');
      return false;
    }
    
    if (!data.priority_category) {
      showToast('Priority category is required', 'error');
      return false;
    }
    
    // Add more validation as needed
    return true;
  }

  function handleStatePreview() {
    const formData = collectStateFormData();
    const previewContent = `
      <h2>${formData.name || 'New State'}</h2>
      <p><strong>Priority:</strong> ${formData.priority_category}</p>
      <p><strong>Population:</strong> ${formatNumber(formData.population_current)}</p>
      <p><strong>Internet Penetration:</strong> ${formData.internet_penetration}%</p>
      <p><strong>Market Score:</strong> ${formData.market_attractiveness_score}</p>
    `;
    
    const previewWindow = window.open('', '_blank', 'width=600,height=400');
    if (previewWindow) {
      previewWindow.document.write(`
        <html>
          <head><title>State Preview</title></head>
          <body style="font-family: Arial, sans-serif; padding: 20px;">
            ${previewContent}
          </body>
        </html>
      `);
      previewWindow.document.close();
    }
  }

  // Parameters Management
  function loadParameters() {
    renderParameters();
    populateParameterCategoryFilter();
  }

  function renderParameters() {
    const searchTerm = document.getElementById('parameterSearch')?.value.toLowerCase() || '';
    const categoryFilter = document.getElementById('parameterCategoryFilter')?.value || '';
    
    let filteredParams = Object.entries(appData.parameters).filter(([id, param]) => {
      const matchesSearch = param.name.toLowerCase().includes(searchTerm);
      const matchesCategory = !categoryFilter || param.category === categoryFilter;
      return matchesSearch && matchesCategory;
    });
    
    const container = document.getElementById('parametersContainer');
    if (!container) return;
    
    if (filteredParams.length === 0) {
      container.innerHTML = '<div class="empty-state"><h3>No parameters found</h3><p>Try adjusting your search or filters</p></div>';
      return;
    }
    
    // Group by category
    const groupedParams = {};
    filteredParams.forEach(([id, param]) => {
      const category = param.category || 'Uncategorized';
      if (!groupedParams[category]) {
        groupedParams[category] = [];
      }
      groupedParams[category].push([id, param]);
    });
    
    container.innerHTML = Object.entries(groupedParams).map(([category, params]) => `
      <div class="parameter-category">
        <h3>${category}</h3>
        ${params.map(([id, param]) => `
          <div class="parameter-item">
            <div class="parameter-info">
              <h4>${param.name}</h4>
              <div class="parameter-meta">Type: ${param.type} | Unit: ${param.unit}</div>
            </div>
            <div class="parameter-actions">
              ${hasPermission('update') ? `<button class="btn btn--outline btn--sm" onclick="editParameter('${id}')">Edit</button>` : ''}
              ${hasPermission('delete') ? `<button class="btn btn--outline btn--sm" onclick="deleteParameter('${id}')">Delete</button>` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    `).join('');
  }

  function populateParameterCategoryFilter() {
    const categoryFilter = document.getElementById('parameterCategoryFilter');
    if (!categoryFilter) return;
    
    const categories = [...new Set(Object.values(appData.parameters).map(p => p.category))];
    
    categoryFilter.innerHTML = '<option value="">All Categories</option>' +
      categories.map(cat => `<option value="${cat}">${cat}</option>`).join('');
  }

  function showParameterModal() {
    const modal = document.getElementById('editParameterModal');
    const title = document.getElementById('parameterModalTitle');
    
    if (title) {
      title.textContent = editingParameter ? 'Edit Parameter' : 'Add New Parameter';
    }
    
    if (editingParameter) {
      populateParameterForm(editingParameter);
    } else {
      clearParameterForm();
    }
    
    showModal('editParameterModal');
  }

  function populateParameterForm(param) {
    const fields = {
      'parameterName': param.name,
      'parameterType': param.type,
      'parameterCategory': param.category,
      'parameterUnit': param.unit,
      'validationMin': param.validation?.min,
      'validationMax': param.validation?.max
    };
    
    Object.keys(fields).forEach(fieldId => {
      const field = document.getElementById(fieldId);
      if (field && fields[fieldId] !== undefined) {
        field.value = fields[fieldId];
      }
    });
  }

  function clearParameterForm() {
    const form = document.getElementById('parameterForm');
    if (form) {
      form.reset();
    }
  }

  function handleParameterSave(e) {
    e.preventDefault();
    
    if (!hasPermission('create') && !hasPermission('update')) {
      showToast('Insufficient permissions', 'error');
      return;
    }
    
    const formData = collectParameterFormData();
    
    if (!validateParameterData(formData)) {
      return;
    }
    
    if (editingParameter) {
      // Update existing parameter
      const paramId = editingParameter.id;
      appData.parameters[paramId] = { ...appData.parameters[paramId], ...formData };
      addAuditLog('update', 'parameter', `Updated parameter: ${formData.name}`, paramId);
      showToast('Parameter updated successfully', 'success');
    } else {
      // Create new parameter
      const paramId = formData.name.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
      appData.parameters[paramId] = formData;
      addAuditLog('create', 'parameter', `Created new parameter: ${formData.name}`, paramId);
      showToast('Parameter created successfully', 'success');
    }
    
    saveData();
    renderParameters();
    populateParameterCategoryFilter();
    hideModal('editParameterModal');
  }

  function collectParameterFormData() {
    const validation = {};
    const minVal = getFieldValue('validationMin');
    const maxVal = getFieldValue('validationMax');
    
    if (minVal) validation.min = parseFloat(minVal);
    if (maxVal) validation.max = parseFloat(maxVal);
    
    return {
      name: getFieldValue('parameterName'),
      type: getFieldValue('parameterType'),
      category: getFieldValue('parameterCategory'),
      unit: getFieldValue('parameterUnit'),
      validation: Object.keys(validation).length > 0 ? validation : undefined
    };
  }

  function validateParameterData(data) {
    if (!data.name.trim()) {
      showToast('Parameter name is required', 'error');
      return false;
    }
    
    if (!data.type) {
      showToast('Parameter type is required', 'error');
      return false;
    }
    
    if (!data.category.trim()) {
      showToast('Parameter category is required', 'error');
      return false;
    }
    
    if (!data.unit.trim()) {
      showToast('Parameter unit is required', 'error');
      return false;
    }
    
    return true;
  }

  // Strategic Insights Management
  function loadInsights() {
    renderInsights();
    populateInsightFilters();
  }

  function renderInsights() {
    const searchTerm = document.getElementById('insightSearch')?.value.toLowerCase() || '';
    const statusFilter = document.getElementById('insightStatusFilter')?.value || '';
    const categoryFilter = document.getElementById('insightCategoryFilter')?.value || '';
    
    let filteredInsights = Object.entries(appData.strategic_insights).filter(([id, insight]) => {
      const matchesSearch = insight.title.toLowerCase().includes(searchTerm) || 
                           insight.content.toLowerCase().includes(searchTerm);
      const matchesStatus = !statusFilter || (insight.status || 'published') === statusFilter;
      const matchesCategory = !categoryFilter || insight.category === categoryFilter;
      return matchesSearch && matchesStatus && matchesCategory;
    });
    
    const container = document.getElementById('insightsContainer');
    if (!container) return;
    
    if (filteredInsights.length === 0) {
      container.innerHTML = '<div class="empty-state"><h3>No insights found</h3><p>Try adjusting your search or filters</p></div>';
      return;
    }
    
    container.innerHTML = filteredInsights.map(([id, insight]) => `
      <div class="insight-item">
        <div class="insight-header">
          <h3 class="insight-title">${insight.title}</h3>
          <div class="insight-actions">
            ${hasPermission('update') ? `<button class="btn btn--outline btn--sm" onclick="editInsight('${id}')">Edit</button>` : ''}
            ${hasPermission('delete') ? `<button class="btn btn--outline btn--sm" onclick="deleteInsight('${id}')">Delete</button>` : ''}
          </div>
        </div>
        <div class="insight-meta">
          <span>Category: ${insight.category}</span>
          <span>Status: <span class="status-badge ${insight.status || 'published'}">${insight.status || 'published'}</span></span>
          <span>Updated: ${formatDate(insight.last_updated)}</span>
          <span>By: ${insight.updated_by}</span>
        </div>
        <div class="insight-content">
          ${insight.content.substring(0, 300)}${insight.content.length > 300 ? '...' : ''}
        </div>
      </div>
    `).join('');
  }

  function populateInsightFilters() {
    const categoryFilter = document.getElementById('insightCategoryFilter');
    if (!categoryFilter) return;
    
    const categories = [...new Set(Object.values(appData.strategic_insights).map(i => i.category))];
    
    categoryFilter.innerHTML = '<option value="">All Categories</option>' +
      categories.map(cat => `<option value="${cat}">${cat}</option>`).join('');
  }

  function showInsightModal() {
    const modal = document.getElementById('editInsightModal');
    const title = document.getElementById('insightModalTitle');
    
    if (title) {
      title.textContent = editingInsight ? 'Edit Strategic Insight' : 'Add New Insight';
    }
    
    if (editingInsight) {
      populateInsightForm(editingInsight);
    } else {
      clearInsightForm();
    }
    
    showModal('editInsightModal');
  }

  function populateInsightForm(insight) {
    const fields = {
      'insightTitle': insight.title,
      'insightCategory': insight.category,
      'insightContent': insight.content
    };
    
    Object.keys(fields).forEach(fieldId => {
      const field = document.getElementById(fieldId);
      if (field && fields[fieldId] !== undefined) {
        field.value = fields[fieldId];
      }
    });
  }

  function clearInsightForm() {
    const form = document.getElementById('insightForm');
    if (form) {
      form.reset();
    }
  }

  function handleInsightSave(e) {
    e.preventDefault();
    
    if (!hasPermission('create') && !hasPermission('update') && !hasPermission('manage_insights')) {
      showToast('Insufficient permissions', 'error');
      return;
    }
    
    const formData = collectInsightFormData();
    
    if (!validateInsightData(formData)) {
      return;
    }
    
    if (editingInsight) {
      // Update existing insight
      const insightId = editingInsight.id;
      appData.strategic_insights[insightId] = { 
        ...appData.strategic_insights[insightId], 
        ...formData,
        last_updated: new Date().toISOString().split('T')[0],
        updated_by: currentUser.username
      };
      addAuditLog('update', 'insight', `Updated insight: ${formData.title}`, insightId);
      showToast('Insight updated successfully', 'success');
    } else {
      // Create new insight
      const insightId = formData.title.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
      appData.strategic_insights[insightId] = {
        ...formData,
        last_updated: new Date().toISOString().split('T')[0],
        updated_by: currentUser.username,
        status: 'draft'
      };
      addAuditLog('create', 'insight', `Created new insight: ${formData.title}`, insightId);
      showToast('Insight created successfully', 'success');
    }
    
    saveData();
    renderInsights();
    populateInsightFilters();
    hideModal('editInsightModal');
  }

  function collectInsightFormData() {
    return {
      title: getFieldValue('insightTitle'),
      category: getFieldValue('insightCategory'),
      content: getFieldValue('insightContent')
    };
  }

  function validateInsightData(data) {
    if (!data.title.trim()) {
      showToast('Insight title is required', 'error');
      return false;
    }
    
    if (!data.category.trim()) {
      showToast('Insight category is required', 'error');
      return false;
    }
    
    if (!data.content.trim()) {
      showToast('Insight content is required', 'error');
      return false;
    }
    
    return true;
  }

  function handleInsightPreview() {
    const formData = collectInsightFormData();
    const previewContent = `
      <h1>${formData.title || 'Untitled Insight'}</h1>
      <p><strong>Category:</strong> ${formData.category}</p>
      <div style="white-space: pre-wrap; line-height: 1.6; margin-top: 20px;">
        ${formData.content || 'No content'}
      </div>
    `;
    
    const previewWindow = window.open('', '_blank', 'width=800,height=600');
    if (previewWindow) {
      previewWindow.document.write(`
        <html>
          <head><title>Insight Preview</title></head>
          <body style="font-family: Arial, sans-serif; padding: 40px; max-width: 800px; margin: 0 auto;">
            ${previewContent}
          </body>
        </html>
      `);
      previewWindow.document.close();
    }
  }

  // User Management
  function loadUsers() {
    if (!hasPermission('manage_users')) return;
    renderUsers();
  }

  function renderUsers() {
    const container = document.getElementById('usersGrid');
    if (!container) return;
    
    const users = Object.entries(appData.users);
    
    container.innerHTML = users.map(([id, user]) => `
      <div class="user-card">
        <div class="user-card-header">
          <h3 class="user-card-name">${user.name}</h3>
          <div class="user-card-actions">
            <button class="btn btn--outline btn--sm" onclick="editUser('${id}')">Edit</button>
            ${id !== currentUser.username ? `<button class="btn btn--outline btn--sm" onclick="deleteUser('${id}')">Delete</button>` : ''}
          </div>
        </div>
        <div class="user-card-meta">
          <p><strong>Username:</strong> ${user.username}</p>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Role:</strong> <span class="status-badge">${user.role}</span></p>
          <p><strong>Last Login:</strong> ${formatDate(user.last_login)}</p>
        </div>
      </div>
    `).join('');
  }

  function showUserModal() {
    const modal = document.getElementById('editUserModal');
    const title = document.getElementById('userModalTitle');
    const passwordGroup = document.getElementById('passwordGroup');
    
    if (title) {
      title.textContent = editingUser ? 'Edit User' : 'Add New User';
    }
    
    if (passwordGroup) {
      const passwordField = document.getElementById('userPassword');
      if (editingUser) {
        passwordGroup.style.display = 'none';
        if (passwordField) passwordField.required = false;
      } else {
        passwordGroup.style.display = 'block';
        if (passwordField) passwordField.required = true;
      }
    }
    
    if (editingUser) {
      populateUserForm(editingUser);
    } else {
      clearUserForm();
    }
    
    showModal('editUserModal');
  }

  function populateUserForm(user) {
    const fields = {
      'userName': user.name,
      'userUsername': user.username,
      'userEmail': user.email,
      'userRole': user.role
    };
    
    Object.keys(fields).forEach(fieldId => {
      const field = document.getElementById(fieldId);
      if (field && fields[fieldId] !== undefined) {
        field.value = fields[fieldId];
      }
    });
  }

  function clearUserForm() {
    const form = document.getElementById('userForm');
    if (form) {
      form.reset();
    }
  }

  function handleUserSave(e) {
    e.preventDefault();
    
    if (!hasPermission('manage_users')) {
      showToast('Insufficient permissions', 'error');
      return;
    }
    
    const formData = collectUserFormData();
    
    if (!validateUserData(formData)) {
      return;
    }
    
    if (editingUser) {
      // Update existing user
      const userId = editingUser.id;
      appData.users[userId] = { 
        ...appData.users[userId], 
        name: formData.name,
        email: formData.email,
        role: formData.role
      };
      addAuditLog('update', 'user', `Updated user: ${formData.name}`, userId);
      showToast('User updated successfully', 'success');
    } else {
      // Create new user
      const userId = formData.username;
      appData.users[userId] = {
        ...formData,
        last_login: null
      };
      addAuditLog('create', 'user', `Created new user: ${formData.name}`, userId);
      showToast('User created successfully', 'success');
    }
    
    saveData();
    renderUsers();
    hideModal('editUserModal');
  }

  function collectUserFormData() {
    const data = {
      name: getFieldValue('userName'),
      username: getFieldValue('userUsername'),
      email: getFieldValue('userEmail'),
      role: getFieldValue('userRole')
    };
    
    if (!editingUser) {
      data.password = getFieldValue('userPassword');
    }
    
    return data;
  }

  function validateUserData(data) {
    if (!data.name.trim()) {
      showToast('User name is required', 'error');
      return false;
    }
    
    if (!data.username.trim()) {
      showToast('Username is required', 'error');
      return false;
    }
    
    if (!data.email.trim()) {
      showToast('Email is required', 'error');
      return false;
    }
    
    if (!data.role) {
      showToast('User role is required', 'error');
      return false;
    }
    
    if (!editingUser && !data.password.trim()) {
      showToast('Password is required for new users', 'error');
      return false;
    }
    
    // Check for duplicate username
    if (!editingUser && appData.users[data.username]) {
      showToast('Username already exists', 'error');
      return false;
    }
    
    return true;
  }

  // Bulk Operations
  function loadBulkOperations() {
    populateBulkUpdateParameterSelect();
  }

  function populateBulkUpdateParameterSelect() {
    const select = document.getElementById('bulkUpdateParameter');
    if (!select) return;
    
    select.innerHTML = '<option value="">Select Parameter</option>' +
      Object.entries(appData.parameters).map(([id, param]) => 
        `<option value="${id}">${param.name}</option>`
      ).join('');
  }

  function handleBulkImportFileSelect(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    document.getElementById('validateImport').disabled = false;
    showToast(`File selected: ${file.name}`, 'info');
  }

  function validateBulkImport() {
    showToast('Bulk import validation completed', 'success');
    document.getElementById('executeImport').disabled = false;
  }

  function executeBulkImport() {
    const progressContainer = document.getElementById('importProgress');
    const progressFill = document.getElementById('importProgressFill');
    const progressText = document.getElementById('importProgressText');
    
    if (progressContainer) {
      progressContainer.classList.remove('hidden');
    }
    
    // Simulate import progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      if (progressFill) {
        progressFill.style.width = progress + '%';
      }
      if (progressText) {
        progressText.textContent = progress + '%';
      }
      
      if (progress >= 100) {
        clearInterval(interval);
        showToast('Bulk import completed successfully', 'success');
        addAuditLog('bulk_import', 'states', 'Completed bulk import operation');
        setTimeout(() => {
          if (progressContainer) {
            progressContainer.classList.add('hidden');
          }
          document.getElementById('executeImport').disabled = true;
          document.getElementById('validateImport').disabled = true;
        }, 1000);
      }
    }, 200);
  }

  function exportStatesInFormat(format) {
    const states = Object.values(appData.states);
    
    switch (format) {
      case 'csv':
        exportAsCSV(states, 'halla_health_states.csv');
        break;
      case 'json':
        exportAsJSON(states, 'halla_health_states.json');
        break;
      case 'excel':
        showToast('Excel export feature coming soon', 'info');
        break;
    }
    
    addAuditLog('export', 'states', `Exported states in ${format.toUpperCase()} format`);
  }

  function downloadBulkTemplate() {
    const template = [{
      name: 'Sample State',
      population_current: 1000000,
      internet_penetration: 50.0,
      priority_category: 'Medium Priority'
    }];
    
    exportAsCSV(template, 'bulk_import_template.csv');
    showToast('Template downloaded successfully', 'success');
  }

  // Audit Log
  function loadAuditLog() {
    renderAuditLog();
  }

  function renderAuditLog() {
    const searchTerm = document.getElementById('auditSearch')?.value.toLowerCase() || '';
    const actionFilter = document.getElementById('auditActionFilter')?.value || '';
    const dateFilter = document.getElementById('auditDateFilter')?.value || '';
    
    let filteredLogs = appData.audit_log.filter(log => {
      const matchesSearch = log.details.toLowerCase().includes(searchTerm) ||
                           log.user.toLowerCase().includes(searchTerm);
      const matchesAction = !actionFilter || log.action === actionFilter;
      const matchesDate = !dateFilter || log.timestamp.startsWith(dateFilter);
      return matchesSearch && matchesAction && matchesDate;
    });
    
    const container = document.getElementById('auditContainer');
    if (!container) return;
    
    if (filteredLogs.length === 0) {
      container.innerHTML = '<div class="empty-state"><h3>No audit logs found</h3><p>Try adjusting your search or filters</p></div>';
      return;
    }
    
    container.innerHTML = filteredLogs.map(log => `
      <div class="audit-item">
        <div class="audit-info">
          <div class="audit-action">${log.action.charAt(0).toUpperCase() + log.action.slice(1)} ${log.entity}</div>
          <div class="audit-details">${log.details}</div>
        </div>
        <div class="audit-meta">
          <div>${log.user}</div>
          <div>${formatDateTime(log.timestamp)}</div>
        </div>
      </div>
    `).join('');
  }

  // Settings
  function loadSettings() {
    // Settings are static for now
  }

  function createBackup() {
    const backup = {
      version: '1.0',
      timestamp: new Date().toISOString(),
      data: appData
    };
    
    exportAsJSON(backup, `halla_health_backup_${new Date().toISOString().split('T')[0]}.json`);
    addAuditLog('backup', 'system', 'Created data backup');
    showToast('Backup created successfully', 'success');
  }

  function handleFileImport(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const backup = JSON.parse(event.target.result);
        
        if (backup.data) {
          appData = backup.data;
          saveData();
          showToast('Data restored successfully', 'success');
          addAuditLog('restore', 'system', 'Restored data from backup');
          
          // Refresh current view
          const activeSection = document.querySelector('.nav-item.active')?.dataset.section;
          if (activeSection) {
            switchSection(activeSection);
          }
        } else {
          showToast('Invalid backup file format', 'error');
        }
      } catch (error) {
        console.error('Error parsing backup file:', error);
        showToast('Error reading backup file', 'error');
      }
    };
    
    reader.readAsText(file);
    e.target.value = ''; // Reset file input
  }

  function validateAllData() {
    let errors = 0;
    
    // Validate states
    Object.entries(appData.states).forEach(([id, state]) => {
      if (!state.name || !state.priority_category) {
        errors++;
      }
    });
    
    // Validate parameters
    Object.entries(appData.parameters).forEach(([id, param]) => {
      if (!param.name || !param.type || !param.category) {
        errors++;
      }
    });
    
    if (errors === 0) {
      showToast('Data validation passed - no errors found', 'success');
    } else {
      showToast(`Data validation found ${errors} errors`, 'warning');
    }
    
    addAuditLog('validate', 'system', `Data validation completed - ${errors} errors found`);
  }

  function testDashboardConnection() {
    // Simulate connection test
    setTimeout(() => {
      showToast('Dashboard connection test successful', 'success');
      addAuditLog('test', 'system', 'Dashboard connection test completed');
    }, 1000);
  }

  function simulateDashboardSync() {
    showToast('Syncing with main dashboard...', 'info');
    
    setTimeout(() => {
      showToast('Dashboard sync completed successfully', 'success');
      addAuditLog('sync', 'system', 'Dashboard sync completed');
    }, 2000);
  }

  function showSystemInfo() {
    const info = {
      'Total States': Object.keys(appData.states).length,
      'Total Parameters': Object.keys(appData.parameters).length,
      'Total Insights': Object.keys(appData.strategic_insights).length,
      'Total Users': Object.keys(appData.users).length,
      'Audit Log Entries': appData.audit_log.length,
      'Last Updated': formatDateTime(appData.last_updated),
      'Current User': currentUser.name,
      'Session Role': currentUser.role
    };
    
    const infoContent = Object.entries(info)
      .map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`)
      .join('');
    
    const infoWindow = window.open('', '_blank', 'width=500,height=400');
    if (infoWindow) {
      infoWindow.document.write(`
        <html>
          <head><title>System Information</title></head>
          <body style="font-family: Arial, sans-serif; padding: 20px;">
            <h2>System Information</h2>
            ${infoContent}
          </body>
        </html>
      `);
      infoWindow.document.close();
    }
  }

  // Export Functions
  function exportStates() {
    const states = Object.values(appData.states);
    exportAsCSV(states, 'halla_health_states.csv');
    addAuditLog('export', 'states', 'Exported states to CSV');
    showToast('States exported successfully', 'success');
  }

  function exportAsCSV(data, filename) {
    if (!data || data.length === 0) return;
    
    const headers = Object.keys(data[0]);
    const csvContent = [
      headers.join(','),
      ...data.map(row => 
        headers.map(header => {
          const value = row[header];
          return typeof value === 'string' && value.includes(',') 
            ? `"${value}"` 
            : value;
        }).join(',')
      )
    ].join('\n');
    
    downloadFile(csvContent, filename, 'text/csv');
  }

  function exportAsJSON(data, filename) {
    const jsonContent = JSON.stringify(data, null, 2);
    downloadFile(jsonContent, filename, 'application/json');
  }

  function downloadFile(content, filename, mimeType) {
    try {
      const blob = new Blob([content], { type: mimeType });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading file:', error);
      showToast('Error downloading file', 'error');
    }
  }

  // Utility Functions
  function getFieldValue(fieldId) {
    const field = document.getElementById(fieldId);
    return field ? field.value.trim() : '';
  }

  function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('hidden');
    }
  }

  function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('hidden');
    }
  }

  function showConfirmDialog(message, onConfirm) {
    const messageEl = document.getElementById('confirmMessage');
    if (messageEl) {
      messageEl.textContent = message;
    }
    
    const confirmBtn = document.getElementById('confirmOk');
    const cancelBtn = document.getElementById('confirmCancel');
    
    // Remove existing listeners
    if (confirmBtn) {
      const newConfirmBtn = confirmBtn.cloneNode(true);
      confirmBtn.parentNode.replaceChild(newConfirmBtn, confirmBtn);
      
      newConfirmBtn.addEventListener('click', () => {
        onConfirm();
        hideModal('confirmModal');
      });
    }
    
    if (cancelBtn) {
      const newCancelBtn = cancelBtn.cloneNode(true);
      cancelBtn.parentNode.replaceChild(newCancelBtn, cancelBtn);
      
      newCancelBtn.addEventListener('click', () => {
        hideModal('confirmModal');
      });
    }
    
    showModal('confirmModal');
  }

  function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    
    container.appendChild(toast);
    
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 4000);
  }

  function formatNumber(num) {
    if (!num) return '0';
    
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    
    return num.toLocaleString();
  }

  function formatDate(dateString) {
    if (!dateString) return 'Never';
    
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString();
    } catch (error) {
      return 'Invalid Date';
    }
  }

  function formatDateTime(dateString) {
    if (!dateString) return 'Never';
    
    try {
      const date = new Date(dateString);
      return date.toLocaleString();
    } catch (error) {
      return 'Invalid Date';
    }
  }

  function formatTimeAgo(timestamp) {
    const now = new Date();
    const past = new Date(timestamp);
    const diffMs = now - past;
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);
    
    if (diffDays > 0) {
      return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    } else if (diffHours > 0) {
      return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    } else {
      return 'Just now';
    }
  }

  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Initialize the application
  init();
});